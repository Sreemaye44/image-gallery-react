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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Gallery = () => {
  let initialData = [
    {
      id: 0,
      imgSrc: telephone,
    },
    {
      id: 1,
      imgSrc: greenHead,
    },
    {
      id: 2,
      imgSrc: pinkHead,
    },
    {
      id: 3,
      imgSrc: redHead,
    },
    {
      id: 4,
      imgSrc: yellowHead,
    },
    {
      id: 5,
      imgSrc: whiteHead,
    },
    {
      id: 6,
      imgSrc: blackWatch,
    },
    {
      id: 7,
      imgSrc: orangeWatch,
    },
    {
      id: 8,
      imgSrc: blueWatch,
    },
    {
      id: 9,
      imgSrc: home,
    },
    {
      id: 10,
      imgSrc: blueHead,
    },
  ];
  const [data, setData] = useState(initialData);
  const [checkboxStates, setCheckboxStates] = useState(
    new Array(data.length).fill(false)
  );

  const handleCheckboxChanges = (index) => {
    const updatedStates = [...checkboxStates];
    updatedStates[index] = !updatedStates[index];
    setCheckboxStates(updatedStates);
  };

  const handleDeleteImages = () => {
    const updatedData = data.filter((_, index) => !checkboxStates[index]);
    setData(updatedData);
    setCheckboxStates(new Array(updatedData.length).fill(false));
  };
  const handleDragEnd = (result) => {
    const{source, destination, type}=result;
    if (!destination) return; 

    if(
      source.droppableId===destination.droppableId &&
      source.index===destination.index
    )
    return;

    if(type==='group'){
      const reorderedData = [...data];
       const [movedImage] = reorderedData.splice(source.index, 1);
      reorderedData.splice(destination.index, 0, movedImage);
      setData(reorderedData);
    }
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
            <div onClick={handleDeleteImages}>
              <p className="text-red-500 cursor-pointer hover:underline">
                Delete files
              </p>
            </div>
          </div>
        ) : (
          <h1 className="text-2xl font-bold px-8 py-5">Gallery</h1>
        )}
      </div>
      <hr></hr>

      <div className="py-10 px-10">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="image-gallery" type="group">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ minHeight: "300px" }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              >
                {data.map((data, index) => {
                  if (index === 0) {
                    return (
                      <Draggable
                        key={data.id}
                        draggableId={data.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
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

                            {checkboxStates[index] ? (
                              <div className="gradient-selected">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 m-6 border rounded-lg"
                                  checked={checkboxStates[index]}
                                  onChange={() => handleCheckboxChanges(index)}
                                />
                              </div>
                            ) : (
                              <input
                                type="checkbox"
                                className="checkbox"
                                checked={checkboxStates[index]}
                                onChange={() => handleCheckboxChanges(index)}
                              />
                            )}
                          </div>
                        )}
                      </Draggable>
                    );
                  } else {
                    return (
                      <Draggable
                        key={data.id}
                        draggableId={data.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
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
                            {checkboxStates[index] ? (
                              <div className="gradient-selected">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 m-2 border rounded-lg"
                                  checked={checkboxStates[index]}
                                  onChange={() => handleCheckboxChanges(index)}
                                />
                              </div>
                            ) : (
                              <input
                                type="checkbox"
                                className="checkbox"
                                checked={checkboxStates[index]}
                                onChange={() => handleCheckboxChanges(index)}
                              />
                            )}
                          </div>
                        )}
                      </Draggable>
                    );
                  }
                })}
                <div className="col-span-1 outline-2 outline-dashed rounded-lg flex justify-center items-center w-26 h-36 md:w-26 md:h-56 lg:min-h-full lg:min-w-full">
                  <div className="text-center">
                    <i
                      className="fa-regular fa-image
           fa-flip-horizontal fa-xl"
                    ></i>
                    <p className="mt-3">Add images</p>
                  </div>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default Gallery;
