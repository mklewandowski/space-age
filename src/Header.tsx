import React from "react";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <div className="app-header">
      <div className="apptitle">
        Space Age
      </div>
      <div className="subtitle">
        a planetary age calculator
      </div>
    </div>
  );
};