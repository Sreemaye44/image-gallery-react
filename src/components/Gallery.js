import React, { useState } from "react";
import blueHead from "../assets/images/image-1.webp";
import home from "../assets/images/image-10.jpeg";
import telephone from "../assets/images/image-11.jpeg";
import greenHead from "../assets/images/image-2.webp";
import pinkHead from "../assets/images/image-3.webp";
import redHead from "../assets/images/image-4.webp";
import yellowHead from "../assets/images/image-5.webp";
import whiteHead from "../assets/images/image-6.webp";
import blackWatch from "../assets/images/image-7.webp";
import orangeWatch from "../assets/images/image-8.webp";
import blueWatch from "../assets/images/image-9.webp";
import "./Gallery.css";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: telephone,
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
      imgSrc: blueHead,
    },
  ];
  const [checkboxStates, setCheckboxStates] = useState(
    new Array(data.length).fill(false)
  );

   const handleCheckboxChanges = (index) => {
     const updatedStates = [...checkboxStates];
     updatedStates[index] = !updatedStates[index];
     setCheckboxStates(updatedStates);
   };
  return (
    <>
      <div>
        {checkboxStates.includes(true) ? (
          <div className="flex justify-between px-8 py-5">
            <div className="flex">
              <input
                type="checkbox"
                checked
                className="h-6 w-6 mt-1 mx-1"
              ></input>
              <h1 className="text-2xl font-bold ml-2">{`${
                checkboxStates.filter((isChecked) => isChecked).length
              } files Selected`}</h1>
            </div>
            <p className="text-red-500">Delete files</p>
          </div>
        ) : (
          <h1 className="text-2xl font-bold px-8 py-5">Gallery</h1>
        )}
      </div>
      <hr></hr>
      <div className="py-10 px-10">
        {
          <div className="grid grid-cols-5 gap-6">
            {data.map((data, index) => {
              if (index === 0) {
                return (
                  <div
                    key={index}
                    className={`col-span-2 row-span-2 gradient image-container`}
                  >
                    <img
                      src={data.imgSrc}
                      alt=""
                      className="border-2 rounded-lg w-full h-full object-cover gradient"
                    />
                    <div
                      className={`${
                        checkboxStates[index]
                          ? "gradient-selected"
                          : "gradient-overlay "
                      }`}
                    ></div>
                    <input
                      type="checkbox"
                      class="checkbox"
                      checked={checkboxStates[index]}
                      onChange={() => handleCheckboxChanges(index)}
                    ></input>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="col-span-1 gradient image-container"
                  >
                    <img
                      src={data.imgSrc}
                      alt=""
                      className="border-2 rounded-lg w-full h-full object-cover gradient"
                    />
                    <div
                      className={`${
                        checkboxStates[index]
                          ? "gradient-selected"
                          : "gradient-overlay "
                      }`}
                    ></div>
                    <input
                      type="checkbox"
                      class="checkbox"
                      checked={checkboxStates[index]}
                      onChange={() => handleCheckboxChanges(index)}
                    ></input>
                  </div>
                );
              }
            })}
            <div className="col-span-1 outline-2 outline-dashed rounded-lg flex justify-center items-center">
              <div className="text-center">
                <i
                  className="fa-regular fa-image
           fa-flip-horizontal fa-xl"
                ></i>
                <p className="mt-3">Add images</p>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Gallery;
