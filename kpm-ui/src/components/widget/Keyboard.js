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
        "{numbers} {char_set} {space} {ent}",
      ],
      shift: [
        "Q W E R T Y U I O P",
        "A S D F G H J K L",
        "{caps} Z X C V B N M {backspace}",
        "{numbers} {char_set} {space} {ent}",
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
      "{shift}": "⇧",
      "{caps}": "⇧",
      "{numbers}": "123",
      "{abc}": "abc",
      "{char_set}": "#+=",
      "{space}": "⎵",
    },
  };

  const onChange = (password) => {
    setState({
      ...state,
      password: password,
    });
  };

  const onKeyPress = (button) => {
    if (button === "{numbers}") {
      setState({
        ...state,
        layoutName: "numbers",
      });
    }

    if (button === "{char_set}") {
      setState({
        ...state,
        layoutName: "char_set",
      });
    }

    if (button === "{abc}") {
      setState({
        ...state,
        layoutName: "default",
      });
    }

    if (button === "{shift}") {
      setState({
        ...state,
        layoutName: "shift",
      });
    }

    if (button === "{caps}") {
      setState({
        ...state,
        layoutName: "default",
      });
    }

    if (button === "{ent}") {
      const creds = {
        ssid: wifiObj.ssid,
        pwd: state.password,
      };

      connectNetwork(creds)
        .then((response) => {
          console.log(response);
          alert("Connected");
        })
        .catch((err) => {
          console.error(err)
          alert("Error");
        });
    }
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
