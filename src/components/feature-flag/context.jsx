import { createContext, useEffect, useState } from "react";
import { getFeatureFlags } from "./data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [featureFlags, setFeatureFlags] = useState({});

  async function featureFlagCall() {
    try {
      setLoading(true);
      const response = await getFeatureFlags();
      setFeatureFlags(response);
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    featureFlagCall();
  }, []);

  return (
    <FeatureFlagContext.Provider
      value={{ loading, errorMessage, featureFlags }}
    >
      {children}
    </FeatureFlagContext.Provider>
  );
}
