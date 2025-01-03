export const isCompatibleBrowser = (): boolean => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  // These wallets support opening a new tab but will not deep link into adding an apple pass.
  if (userAgent.includes('Phantom/ios' || userAgent.includes('TokenPocket/iOS'))) {
    return false;
  }

  return true;
}; 