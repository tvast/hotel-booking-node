// App.js 
import React from "react";
import SearchRoot from "./pages/search-root";
import "./styles/main.scss";
// Root component
const App = () => {
  return (
    <>
       {/*<div className="logo">
        <img src={logo} alt="logo" draggable={false} />
      </div>*/}
      <SearchRoot />
    </>
  );
};
export default App;
