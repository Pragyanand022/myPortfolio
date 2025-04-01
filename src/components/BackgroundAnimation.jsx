import { useEffect } from "react";
import '../App.css'

const BackgroundAnimation = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js";
    script.setAttribute("data-who", "");
    script.setAttribute("data-container", ".background_animation");

    script.setAttribute(
      "data-option",
      JSON.stringify({
        environment: {
          gradient: "horizontal",
          sensitivity: 0.8,
          colorStart: [1, 1, 1, 1],
          colorEnd: [23, 24, 25, 1],
        },
        particle: {
          life: 5,
          power: 0.02,
          texture:
            "https://res.cloudinary.com/naker-io/image/upload/v1566560053/circle_05.png",
          number: 300,
          colorStart: [116, 129, 92, 0.13],
          colorEnd: [184, 182, 168, 0.52],
          sizeStart: 0.28,
          sizeEnd: 0.56,
          direction1: { x: 0, y: 100, z: 100 },
          direction2: { x: 0, y: 0, z: 0 },
        },
      })
    );

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when component unmounts
    };
  }, []);

  useEffect(() => {
    const background = document.querySelector(".background-animation");

    const disableTouch = (e) => {
      e.preventDefault(); // Prevents background from capturing touch
      e.stopPropagation(); // Stops bubbling up the event
    };

    if (background) {
      background.addEventListener("touchstart", disableTouch, { passive: false });
      background.addEventListener("touchmove", disableTouch, { passive: false });
    }

    return () => {
      if (background) {
        background.removeEventListener("touchstart", disableTouch);
        background.removeEventListener("touchmove", disableTouch);
      }
    };
  }, []);

  return <div className="background_animation" style={{ position: "absolute", width: "100%", height: "100vh" }}></div>;
};

export default BackgroundAnimation;
