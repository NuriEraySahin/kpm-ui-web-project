import React, { useState } from "react";
import KeyboardLayout from "react-simple-keyboard";

import { connectNetwork } from "../../services/WifiService";
import "react-simple-keyboard/build/css/index.css";

const password__icon__show = require("../../assets/img/pwd-show.png");
const password__icon__hide = require("../../assets/img/pwd-hide.png");
const Keyboard = ({ wifiObj }) => {
  const [state, setState] = useState({
    layoutName: "default",
    password: "",
  });

  const [hidden, setHidden] = useState(true);

  const keyboardOptions = {
    layout: {
      default: [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "{shift} z x c v b n m {backspace}",
        "{numbers} {space} {ent}",
      ],
      shift: [
        "Q W E R T Y U I O P",
        "A S D F G H J K L",
        "{shift} Z X C V B N M {backspace}",
        "{numbers} {space} {ent}",
      ],
      numbers: [
        "1 2 3 4 5 6 7 8 9 0",
        '- / : ; ( ) ₺ & @ "',
        ". , ? ! ' {backspace}",
        "{abc} {char_set} {space} {ent}",
      ],
      char_set: [
        "[ ] { } # % ^",
        "_ \\ | ~ < > €",
        "* + = $ £ • {backspace}",
        "{abc} {numbers} {space} {ent}",
      ],
    },
    display: {
      "{ent}": "Join",
      "{backspace}": "⌫",
      "{capslock}": "caps lock ⇪",
      "{shift}": "⇧",
      "{numbers}": "123",
      "{abc}": "abc",
      "{char_set}": "?#",
      "{space}": "⎵"
    },
  };

  const onChange = (password) => {
    setState({
      ...state,
      password: password,
    });
    console.log("Input changed", password);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || "{abc}") handleShift();
    if (button === "{numbers}") handleNumbers();
    if (button === "{char_set}") handleCharSet();
    if (button === "{ent}") handleConnect();
  };

  const handleConnect = () => {
    const params = new URLSearchParams({
      ssid: wifiObj.ssid,
      pwd: state.password
    })

    connectNetwork(params.toString()).then(response => {
      alert("Connected")
    })
  };

  const handleShift = () => {
    let layoutName = state.layoutName;

    setState({
      ...state,
      layoutName: layoutName === "default" ? "shift" : "default",
    });
  };

  const handleNumbers = () => {
    let layoutName = state.layoutName;

    setState({
      ...state,
      layoutName: layoutName !== "numbers" ? "numbers" : "default",
    });
  };

  const handleCharSet = () => {
    let layoutName = state.layoutName;

    setState({
      ...state,
      layoutName: layoutName !== "char_set" ? "char_set" : "default",
    });
  };

  const onChangeInput = (event) => {
    let password = event.target.value;
    setState({
      ...state,
      password: password,
    });
  };

  return (
    <>
      <div>
        <div className="wifi__password border-2px-silver-chalice">
          <input
            value={state.password}
            placeholder={"Password"}
            onChange={(e) => onChangeInput(e)}
            className="wifi__password__input"
            type={hidden ? "password" : "text"}
            autoFocus
          />
          <img
            onClick={() => setHidden(!hidden)}
            class="password__input__icon"
            src={hidden ? password__icon__hide : password__icon__show}
          />
        </div>
        <KeyboardLayout
          theme={"hg-theme-default darkTheme"}
          layoutName={state.layoutName}
          onChange={(password) => onChange(password)}
          onKeyPress={(button) => onKeyPress(button)}
          mergeDisplay={true}
          {...keyboardOptions}
        />
      </div>
    </>
  );
};

export default Keyboard;
