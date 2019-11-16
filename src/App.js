import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import logo from "./assets/googlelogo.png";
import voiceSearch from "./assets/google-voice.png";

function App() {
  return (
    <div>
      <header
        className="d-flex justify-content-end align-items-center py-3"
        style={styles.header}
      >
        <a href="/" className="mx-2">
          Gmail
        </a>
        <a href="/" className="mx-2">
          Images
        </a>
        <span className="mx-2" id="menu">
          <AppsIcon />
        </span>
        <img
          className="ml-2"
          src="https://image.flaticon.com/icons/svg/145/145843.svg"
          alt="profile"
        />
      </header>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "92px" }}
      >
        <img src={logo} alt="logo" id="logo" />
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "28px" }}
      >
        <div id="search">
          <SearchIcon style={{ paddingRight: "4px", color: "#9AA0A6" }} />
          <input type="search" id="input" style={{ flexGrow: "1" }} />
          <img src={voiceSearch} alt="voice" id="voiceSearch"></img>
        </div>
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "18px" }}
      >
        <input type="submit" value="Google Search" />
        <input type="submit" value="I'm Feeling Lucky" />
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "16px", fontSize: "small" }}
        id="languages"
      >
        <span className="mx-2">Google offered in:</span>{" "}
        <a href="/" className="mx-1">
          हिन्दी
        </a>
        <a href="/" className="mx-1">
          বাংলা
        </a>
        <a href="/" className="mx-1">
          తెలుగు
        </a>
        <a href="/" className="mx-1">
          मराठी
        </a>
        <a href="/" className="mx-1">
          தமிழ்
        </a>
        <a href="/" className="mx-1">
          ગુજરાતી
        </a>
        <a href="/" className="mx-1">
          ಕನ್ನಡ
        </a>
        <a href="/" className="mx-1">
          മലയാളം
        </a>
        <a href="/" className="mx-1">
          ਪੰਜਾਬੀ
        </a>
      </div>
    </div>
  );
}

const styles = {
  header: {
    fontFamily: "arial, sans-serif",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "24px"
  }
};

export default App;
