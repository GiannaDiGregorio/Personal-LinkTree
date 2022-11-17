// Import light theme colors
// Import dark theme colors
import Box from "../components/Box";
import profilepic from "../images/profilePic2.jpg";
import data from "../data/data";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(false);

  //Change theme classes by module

  function changetheme() {
    setTheme(!theme);
  }

  const boxes = data.map((item) => {
    return <Box {...item} theme={theme} />;
  });

  return (
    <>
      <div className={theme ? "bodydivdark" : "bodydiv"}>
        <div className={theme ? "containerdark" : "container"}>
          <div className="buttondiv">
            <button className={theme ? "btndark" : "btn"} onClick={changetheme}>
              {theme ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <img className="profilepic" src={profilepic} alt="Gianna" />
          <h1 className={theme ? "dark" : null}>Gianna DiGregorio</h1>
          <p className={theme ? "darktext" : null}>
            Follow my socials with the links below! The Saxbys link will give
            you $3 off of your first order if you download the app!
          </p>
          {boxes}
        </div>
      </div>
    </>
  );
}

export default App;
