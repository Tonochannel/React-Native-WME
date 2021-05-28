import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://api-mobileapp.advanceagro.net/api",
  },
  staging: {
    apiUrl: "https://api-mobileapp.advanceagro.net/api",
  },
  prod: {
    apiUrl: "https://api-mobileapp.advanceagro.net/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
