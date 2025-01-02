const ENV = (() => {
  if (window.location.hostname.includes('staging')) {
    return 'staging';
  }
  return process.env.NODE_ENV || 'development';
})();

const CONFIG = {
  development: {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001'
  },
  staging: {
    apiUrl: process.env.REACT_APP_API_URL || 'https://api-staging.pow.cards'
  },
  production: {
    apiUrl: process.env.REACT_APP_API_URL || 'https://api.pow.cards'
  }
};

export const getConfig = () => CONFIG[ENV as keyof typeof CONFIG]; 