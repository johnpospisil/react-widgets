import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("New language or text detected!");
  }, [language, text]);
  return <div />;
};

export default Convert;
