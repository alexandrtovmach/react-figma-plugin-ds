import React from "react";

import { ButtonProps } from "../index";

const Button: React.SFC<ButtonProps> = ({
  children,
  className,
  isSecondary,
  isDisabled,
  isLoading,
  onClick,
  isDestructive
}) => {
  className = className || "";
  const level = isSecondary ? "secondary" : "primary";
  const modificator = isDestructive ? "-destructive" : "";
  const contentColor = isSecondary ? "#acacac" : "#fff";

  return (
    <button
      onClick={onClick}
      className={`button button--${level}${modificator} ${className}`}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? (
        <>
          <style>
            {`.loader {
              display: flex;
              align-items: center;
              position: relative;
            }
            .loader div {
              margin: 0 5px;
              overflow: visible;
              background: ${contentColor};
              height: 1px;
              width: 1px;
              border-radius: 50%;
              animation: loader 2s linear infinite;
            }
            .loader div:nth-child(1) {
              animation-delay: 0;
            }
            .loader div:nth-child(2) {
              animation-delay: 0.25s;
            }
            .loader div:nth-child(3) {
              animation-delay: 0.50s;
            }
            @keyframes loader {
              0% {
                box-shadow: 0 0 0 3px ${contentColor};
              }
              50%, 100% {
                box-shadow: 0 0 0 1px ${contentColor};
              }
            }`}
          </style>
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
