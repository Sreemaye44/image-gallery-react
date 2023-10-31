import React from "react";
import img1 from "../assets/ollyo1.jpg";
import img2 from "../assets/ollyo2.jpg";
import img3 from "../assets/ollyo3.jpg";
import img4 from "../assets/ollyo4.jpg";
import img5 from "../assets/ollyo8.jpg";
import img6 from "../assets/ollyo6.jpg";
import img7 from "../assets/ollyo7.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
  ];
  return (
    <>
      {
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index}  className={`col-span-${index === 0 ? '2' : '1'}`}>
              <img src={item.imgSrc} className="w-full" />
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default Gallery;
