import "./translation.css";
import { useEffect, useState } from "react";

//Translation using sign images
/**
 * Area including the translation (sign images).
 * @returns Translation area
 */
const Translated = ({ input }) => {
  const [translationImages, setTranslationsImages] = useState([]);

  useEffect(() => {
    const imgArray = [];
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) !== " ") {
        imgArray.push(
          <img
            src={`/img/signs/${input.charAt(i).toLowerCase()}.png`}
            alt={input.charAt(i)}
            width={60}
            height={60}
          />
        );
      }
    }
    setTranslationsImages(imgArray);
  }, [input]);

  return (
    <div className="translation-container">
      {translationImages.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Translated;
