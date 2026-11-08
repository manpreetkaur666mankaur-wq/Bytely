/*
  BYTELY – Firebase settings
  ---------------------------------------------------------------
  1. Firebase console > Project settings > Your apps > Web app > "firebaseConfig"
  2. Replace every YOUR_... value below with your real values.
  3. Save the file next to index.html and deploy (see README.md).

  These web keys are NOT secrets. They only identify your project.
  What protects student data is firestore.rules + the Authorized domains list.
  Never put a service-account key or any private key in this folder.
*/
window.BYTELY_FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

window.BYTELY_AUTH_OPTIONS = {
  defaultCountry: "+91",   // pre-selected country code
  resendSeconds: 30        // wait time before "Resend OTP" appears
};
