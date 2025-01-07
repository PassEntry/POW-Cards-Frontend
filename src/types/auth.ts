export interface WalletPassResponse {
  downloadUrl: string;
  status: 'retrieved' | 'created';
}

export interface ApiErrorResponse {
  error: string;
  details?: string;
} 