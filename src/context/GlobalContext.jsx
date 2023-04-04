import React, { useContext, useState } from "react";

const GlobanCon = React.createContext();
const Context = ({ children }) => {
  const [isToggled, setToggleSideBar] = useState(false);
  const toggleNav = () => {
    const rootElement = document.getElementsByTagName("html")[0];
    if (isToggled) {
      rootElement.classList.remove("menu-open");
      setToggleSideBar(false);
    } else {
      rootElement.classList.add("menu-open");
      setToggleSideBar(true);
    }
  };
  return (
    <GlobanCon.Provider
      value={{
        isToggled,
        setToggleSideBar,
        toggleNav,
      }}
    >
      {children}
    </GlobanCon.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobanCon);
};

export { Context, useGlobalContext, GlobanCon };
