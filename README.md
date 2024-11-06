This is a React Native app developed for iOS using Typescript and the Expo framework.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## Improvements

- Resolve the current navigation test issues, particularly around Jest mocks, to ensure stable test results.
- Secure the API key by moving it to a .env file, ensuring sensitive data isn’t hardcoded.
- E2E-testing and set up CI/CD pipelines to streamline automated testing and deployment with Github actions.
- Handeling isLoading-state.
- Having all the CSS in 1 file or maybe implementing NativeWind for the project.

## Frameworks and libaries used

- Expo
- Axios for HTTP-request. Neat and simple to use for this simple request. Easy to read.
- Jest for testing.
- ESLint and Prettier.
