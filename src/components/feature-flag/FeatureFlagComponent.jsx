import React from "react";
import { useContext } from "react";
import { FeatureFlagContext } from "./context";
import TreeView from "../tree-view";
import LightDark from "../light-dark";
import QrCode from "../QrCode";
import CustomModal from "../custom-modal";

const FeatureFlagComponent = () => {
  const componentFromFeatureFlags = {
    showTreeView: <TreeView key="showTreeView" />,
    showLightDarkMode: <LightDark key="showLightDarkMode" />,
    showQrCodeScanner: <QrCode key="showQrCodeScanner" />,
    showCustomModalGenerator: <CustomModal key="showCustomModalGenerator" />,
  };
  const { loading, errorMessage, featureFlags } =
    useContext(FeatureFlagContext);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      {featureFlags &&
        Object.keys(featureFlags).map(
          (featureFlag) =>
            featureFlags[featureFlag] && componentFromFeatureFlags[featureFlag]
        )}
    </div>
  );
};

export default FeatureFlagComponent;
