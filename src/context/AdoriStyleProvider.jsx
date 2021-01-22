import React, { useState } from "react";

import { StyleContext } from "./StyleContext";

const AdoriStyleProvider = ({ children }) => {
  const [styles, setStyles] = useState({
    homePage: { backgroundColor: "#fff", accentColor: "#000" },
  });

  const handleStyleChange = (value) => {
    setStyles(value);
  };

  const value = { styles, handleStyleChange };
  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
};

export default AdoriStyleProvider;
