### Steps for Task 1: Create Your First Mobile App

1.  **Navigate to Project Directory:** Used the terminal command `cd prodev-mobile-setup` to move into the parent project directory.
2.  **Initialize Project:** Executed `npx create-expo-app@latest .` to scaffold a new Expo project using the latest Expo Router "Tabs" template.
3.  **Modify Home Screen:** Opened the file `app-example/app/(tabs)/index.tsx` and located the default text.
4.  **Update Content:** Changed the default "Welcome!" text to **"First App Created"**.
5.  **Run and Test:** Started the development server using `npx expo start`, scanned the QR code with the Expo Go app, and confirmed the updated text appeared on the mobile device. 
6.  **Reset Application:** Ran the command `npm run reset-project` to clean the project environment (removing `node_modules` and caches).
7.  **Document:** Documented all scaffolding steps and the detailed observations of the effects of the `npm run reset-project` command within the `README.md` file.