"use client";
import { useState, useEffect } from "react";

export default function ModeToggle() {
  // Utiliser l'état pour gérer le thème
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  console.log(isDarkTheme);

  // Mettre à jour l'attribut `data-theme` sur le `body` lorsque `isDarkTheme` change
  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  // Fonction pour basculer le thème
  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className="darkContainer">
      <div
        id="darklight-1"
        className="theme-switcher d-flex align-items-center justify-content-center"
      >
        <input
          className="sun"
          type="checkbox"
          id="sun"
          checked={!isDarkTheme}
          onChange={toggleTheme}
        />
        <span className="moon"></span>
      </div>
    </div>
  );
}
