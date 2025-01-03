# POW Cards Frontend

POW Cards Frontend is a React-based web application that allows users to create and manage digital wallet cards authenticated with Solana wallets.

## Features

- **Solana Wallet Integration** - Seamless integration with popular Solana wallets
- **Digital Pass Creation** - Create digital passes for Apple Wallet and Google Pay
- **Responsive Design** - Mobile-first design approach
- **TypeScript Support** - Full TypeScript support for better development experience

## Prerequisites

- Node.js (v19 or higher)
- npm or yarn
- A Solana wallet (e.g., Phantom)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/PassEntry/POW-Cards-Frontend.git
cd POW-Cards-Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see Configuration section)

4. Start the development server:
```bash
npm start
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Configuration

The application uses environment variables for configuration. To set up your environment:

1. Copy the appropriate example file for your environment:
```bash
# For local development
cp .env.local.example .env.local

# For staging
cp .env.staging.example .env.staging

# For production
cp .env.production.example .env.production
```

2. Modify the values in the created .env file if needed

Available environment variables:
- `REACT_APP_API_URL`: The base URL for the API

## Wallet Integration

The application uses `@solana/wallet-adapter-react` for Solana wallet integration. Here's a basic example of how to use the wallet signing functionality:

```typescript
import { useWalletSignIn } from './hooks/useWalletSignIn';

const YourComponent = () => {
  const { signIn, isLoading, error, isSuccess } = useWalletSignIn();

  const handleSignIn = async () => {
    try {
      const response = await signIn();
      // Handle successful sign-in
    } catch (err) {
      // Handle error
    }
  };
};
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Commit Guidelines

We use conventional commits for version management. Each commit message should be structured as follows:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

Need help? Contact us:
- Email: info@passentry.com
- GitHub Issues: [Report issues](https://github.com/PassEntry/pow-cards-frontend/issues)
