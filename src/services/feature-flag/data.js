const dummyFeatureFlagsData = {
  showTreeView: true,
  showLightDarkMode: true,
  showCustomModalGenerator: true,
};

export function getFeatureFlags() {
  return new Promise((resolve, reject) => {
    if (dummyFeatureFlagsData) {
      setTimeout(() => resolve(dummyFeatureFlagsData), 1000);
    } else {
      reject(new Error("Feature flags not found"));
    }
  });
}
