import React from "react";

const Cookies = ({ setState }) => {
  const handleCookies = (choice) => {
    localStorage.setItem("useCookies", choice);
    setState((prevState) => {
      return { ...prevState, actionTaken: true, useCookies: choice };
    });
  };

  return (
    <div className="cookies">
      <p>
        We collect cookies to analyze our website traffic and performance we
        never collect any personal data
      </p>
      <span className="cookies-buttons">
        <button
          className="btn btn-primary buttonPadding"
          onClick={() => handleCookies(true)}
        >
          Accept
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => handleCookies(false)}
        >
          Decline
        </button>
      </span>
    </div>
  );
};

export default Cookies;
