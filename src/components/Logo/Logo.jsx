import React from "react";
import logo from "../../assets/logoImage.png";

const Logo = () => {
  return(
    <div className="logo-container">
     <img src={logo} alt="Qtify Logo" className="logo" width={67} />
     </div>
  );
};

export default Logo;