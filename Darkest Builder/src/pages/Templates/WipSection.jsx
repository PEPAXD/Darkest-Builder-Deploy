import React, { useState, useEffect } from "react";
import "./styles/WipSection.css";

function WipSection({ url_Bg }) {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const backgroundIMG = [url_Bg, "wip_responsive.jpg"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="Wip">
      <div
        className="background"
        style={{ background: `url(${isMobile ? backgroundIMG[1] : backgroundIMG[0]}) no-repeat center top/cover` }}
      >
        <div className="wipContainer">
          <div className="wipContain">
            <h1>Work in Progress</h1>
            <p>Sorry, this section is still under construction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WipSection;
