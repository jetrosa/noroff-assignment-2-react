import { useEffect, useState } from "react";
const imgPx = 60;

//Translation using sign images
/**
 * Area including the translation (sign images).
 * @returns Translation area
 */
const Translated = ({ input }) => {
  const [translationImages, setTranslationsImages] = useState([]);

  useEffect(() => {
    const createBlankImage = (width, height) => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.fillRect(0, 0, width, height);

      const img = new Image(width, height);
      img.src = canvas.toDataURL();

      return (
        <img src={canvas.toDataURL()} alt={""} width={input} height={input} />
      );
    };

    const imgArray = [];
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i).match(/[a-z]/i) !== null) {
        imgArray.push(
          <img
            src={`/img/signs/${input.charAt(i).toLowerCase()}.png`}
            alt={input.charAt(i)}
            width={imgPx}
            height={imgPx}
          />
        );
      } else {
        imgArray.push(createBlankImage(imgPx, imgPx));
      }
    }
    setTranslationsImages(imgArray);
  }, [input]);

  return (
    <div className="translation-container">
      <div className="translation-text">
        {translationImages.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Translated;
