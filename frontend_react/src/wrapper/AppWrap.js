import React from "react";

// Import High Level Components
import { NavigationDots, SocialMedia } from "../components";

// Idea is to wrap HOC (  High Ordred Components) and all Sections from the App
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {/* Social Media Component*/}
        <SocialMedia />
        <div className="app__wrapper app__flex">
          {/* Section Components */}
          <Component />

          <div className="copyright">
            <p className="p-text">@2023 Dusan Velimirovic</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
