import React from "react";
import blueHead from "../assets/images/image-1.webp";
import greenHead from "../assets/images/image-2.webp";
import pinkHead from "../assets/images/image-3.webp";
import redHead from "../assets/images/image-4.webp";
import yellowHead from "../assets/images/image-5.webp";
import whiteHead from "../assets/images/image-6.webp";
import blackWatch from "../assets/images/image-7.webp";
import orangeWatch from "../assets/images/image-8.webp";
import blueWatch from "../assets/images/image-9.webp";
import home from "../assets/images/image-10.jpeg";
import telephone from "../assets/images/image-11.jpeg";


const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: blueHead,
    },
    {
      id: 2,
      imgSrc: greenHead,
    },
    {
      id: 3,
      imgSrc: pinkHead,
    },
    {
      id: 4,
      imgSrc: redHead,
    },
    {
      id: 5,
      imgSrc: yellowHead,
    },
    {
      id: 6,
      imgSrc: whiteHead,
    },
    {
      id: 7,
      imgSrc: blackWatch,
    },
    {
      id: 8,
      imgSrc: orangeWatch,
    },
    {
      id: 9,
      imgSrc: blueWatch,
    },
    {
      id: 10,
      imgSrc: home,
    },
    {
      id: 11,
      imgSrc: telephone,
    },
  ];
  return (
    <>
      {
        <div className="grid grid-cols-5 gap-6">
      {data.map((data, index) => {
        if (index === 0) {
          return (
            <div key={index} className="col-span-2 row-span-2">
              <img src={data.imgSrc} alt=""  className="border rounded-lg w-full h-full object-cover" />
            </div>
          );
        } else {
          return (
            <div key={index} className="col-span-1">
              <img src={data.imgSrc} alt="" className="border rounded-lg w-full h-full object-cover" />
            </div>
          );
        }
      })}
    </div>
      }
    </>
  );
};

export default Gallery;
