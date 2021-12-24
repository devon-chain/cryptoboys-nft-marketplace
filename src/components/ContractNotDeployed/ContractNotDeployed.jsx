import React from "react";
import fxIcon from "./fx.svg";

const ContractNotDeployed = ({ connectToMetamask }) => {
  return (
    <div className="jumbotron">
      <h3> FunctionX NFT Contract Not Deployed To This Network.</h3>
      <hr className="my-4" />
      {/* <p className="lead">
        Switch to FunctionX Testnet.
      </p> */}
      <button
        onClick={connectToMetamask}
        className="btn btn-primary d-flex align-items-center"
        style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
      >
        Switch To FunctionX Testnet{" "}
        <img
          src={fxIcon}
          alt="metamask-icon"
          style={{ width: "2rem", marginLeft: "0.5rem" }}
        />
      </button>
    </div>
  );
};

export default ContractNotDeployed;
