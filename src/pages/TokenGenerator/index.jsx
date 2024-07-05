import { useState, useEffect } from "react";
import "./tokenGenerator.css";
import * as React from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import PositionedSnackbar from "../../components/SnackbarTop";
import SwitchColor from "../../components/Switch";

const generatePassword = (
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

  let allowedChars = "";
  let token = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (allowedChars.length === 0) {
    alert("You have to choose at least one char!");
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    token += allowedChars[randomIndex];
  }

  return token;
};

function TokenGenerator() {
  const [tokenLength, setTokenLength] = useState(16);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [token, setToken] = useState("");

  //material ui
  const [open, setOpen] = useState(false);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const generatedToken = generatePassword(
      tokenLength,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );
    setToken(generatedToken);
  }, [
    tokenLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols,
  ]);

  const handleCopyClick = () => {
    const textarea = document.querySelector(".text-area");
    navigator.clipboard.writeText(textarea.value);
    setOpen(!open);
  };

  const handleChangeUppercase = () => {
    setIncludeUppercase(!includeUppercase);
  };

  const handleChangeLowercase = () => {
    setIncludeLowercase(!includeLowercase);
  };

  const handleChangeNumbers = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const handleChangeSymbols = () => {
    setIncludeSymbols(!includeSymbols);
  };

  return (
    <div className="container-token">
      <div className="layout">
        <div className="title">
          <h1>Token Generator</h1>
        </div>
        <div className="separator"></div>
        <div className="description">
          <p>
            Generate a random token with the flexibility to choose its length
            and the specific characters you desire.
          </p>
        </div>
      </div>

      <div className="content">
        <form className="form">
          <div className="chars">
            <label htmlFor="upper">
              Uppercase
              <SwitchColor
                id="upper"
                defaultChecked
                checked={includeUppercase}
                style={{ color: '#6a0dad' }}
                onChange={handleChangeUppercase}
              />
            </label>
            <label htmlFor="lower">
              Lowercase
              <SwitchColor
                id="lower"
                checked={includeLowercase}
                style={{ color: '#6a0dad' }}
                onChange={handleChangeLowercase}
              />
            </label>
          </div>
          <div className="chars">
            <label htmlFor="numbers">
              Numbers
              <SwitchColor
                id="numbers"
                checked={includeNumbers}
                style={{ color: '#6a0dad' }}
                onChange={handleChangeNumbers}
              />
            </label>
            <label htmlFor="symbols">
              Symbols
              <SwitchColor
                id="symbols"
                defaultChecked
                checked={includeSymbols}
                style={{ color: '#6a0dad' }}
                onChange={handleChangeSymbols}
              />
            </label>
          </div>
        </form>
        <div className="range-input">
          <label htmlFor="range">
            Length ({tokenLength})
            <input
              type="range"
              name=""
              id=""
              value={tokenLength}
              onChange={(e) => setTokenLength(e.target.value)}
              min="6"
              max="512"
            />
          </label>
        </div>
        <TextareaAutosize
          className="text-area"
          aria-label="empty textarea"
          value={token || "Token..."}
        />
      </div>

      <button onClick={handleCopyClick} className="copy-button">
        Copy
      </button>
      <PositionedSnackbar
        message="Token successfully copied!"
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export default TokenGenerator;
