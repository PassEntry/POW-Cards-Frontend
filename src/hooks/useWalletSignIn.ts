import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { useState } from 'react';
import { getConfig } from '../config/environment';
import { WalletPassResponse, ApiErrorResponse } from '../types/auth';

interface SignInData {
  domain: string;
  nonce: string;
  issuedAt: string;
}

export const useWalletSignIn = () => {
  const { publicKey, signMessage, wallet } = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { apiUrl } = getConfig();

  const createSignInMessage = (data: SignInData) => {
    return `${data.domain} wants you to create a POW card with your Solana account:
${publicKey?.toBase58()}

Nonce: ${data.nonce}
Issued At: ${data.issuedAt}`;
  };

  const signIn = async (): Promise<WalletPassResponse> => {
    if (!publicKey || !signMessage) {
      setError('Please connect your wallet first');
      throw new Error('Wallet not connected');
    }

    try {
      setIsLoading(true);
      setError(null);
      setIsSuccess(false);

      // 1. Get sign-in data from backend with publicKey
      const response = await fetch(`${apiUrl}/api/v1/claim/init?publicKey=${publicKey.toBase58()}`);
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.details || responseData.error || 'Failed to initialize');
      }
      
      const signInData: SignInData = responseData;
      
      // 2. Create message to sign
      const message = createSignInMessage(signInData);
      const encodedMessage = new TextEncoder().encode(message);
      
      // 3. Request signature from wallet
      const signature = await signMessage(encodedMessage);
      
      // 4. Send signature to backend for verification
      const verifyResponse = await fetch(`${apiUrl}/api/v1/claim/wallet-pass`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          publicKey: publicKey.toBase58(),
          signature: bs58.encode(signature),
          walletType: wallet?.adapter.name || 'generic'
        }),
      });

      const verifyData = await verifyResponse.json();
      
      if (!verifyResponse.ok) {
        throw new Error(verifyData.details || verifyData.error || 'Verification failed');
      }
      
      setIsSuccess(true);
      return verifyData;

    } catch (err) {
      console.error('Wallet sign-in error:', err);
      setError('Error with your request. Please try again or contact support.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signIn,
    isLoading,
    error,
    isSuccess,
  };
}; 