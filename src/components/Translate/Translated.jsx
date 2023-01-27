import "./translation.css";
import { useEffect, useState } from "react";

const Translated = ({ input }) => {
  const [translationImages, setTranslationsImages] = useState([]);

  useEffect(() => {
    const imgArray = [];
    const sentence = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) !== " ") {
        imgArray.push(
          <img
            src={`/img/signs/${sentence.charAt(i)}.png`}
            alt={""}
            width={70}
            height={70}
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
