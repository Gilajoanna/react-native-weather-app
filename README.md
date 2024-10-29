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

## How I approached the assignment

1. Research and Planning: Since this was my first React Native project, I began by researching React Native basics, consulting documentation and articles to choose appropriate libraries for navigation, HTTP requests, and API handling.

2. The next step was setting up the screens with hardcoded data and configuring navigation between them. To guide me through this, I followed the React Native documentation to understand how to do this with Typescript and also to understand essential UI elements, such as Navigation, SafeAreaView, and Pressable.

3. For weather data, I chose the OpenWeather API, as I had experience with it from a previous project. Currently, the API_KEY is located in the service file, though it should be moved to an .env file. I used Axios for the HTTP requests, first logging the fetched data to the console to verify it before replacing the hardcoded data in the UI.

4. Finally, I aimed to implement unit tests for the two primary functions in the app: navigation to the detail screen and correctly rendering data from the API. This turned out to be challenging, as my tests consistently failed. I tried consulting documentation and even used GitHub Copilot for guidance, but they still don’t pass. I suspect the issue might be related to the Jest mock setup for navigation.

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
