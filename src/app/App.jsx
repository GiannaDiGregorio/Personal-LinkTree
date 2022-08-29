import Box from "../components/Box";
import profilepic from "../images/profile.jpg";
import data from "../data/data";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(false);

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
          <p className={theme ? "dark" : null}>
            Here are some links to my socials! Download the Saxbys app using the
            last link to earn $3 Saxbys credit!
          </p>
          {boxes}
        </div>
      </div>
    </>
  );
}

export default App;