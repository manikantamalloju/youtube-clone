import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
//import { logoHeader } from "./assets/images/512x512bb.jpg";
import "./index.css";
const Header = (props) => {
  const [userInput, setUserInput] = useState("");

  const onChangeUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const onClickSerchIcon = () => {
    // calll setSearchInput
  };

  return (
    <div className="header-bg">
      <div className="youtube-container">
        <ImYoutube2 size={32} />
      </div>
      <div className="searchContainer">
        <input
          className="searchInput"
          type="search"
          value={userInput}
          onChange={onChangeUserInput}
        />
        <button className="submitInput">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="avatar-container">
        <RxAvatar size={32} />
      </div>
    </div>
  );
};

export default Header;
