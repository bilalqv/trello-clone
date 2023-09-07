import React, { useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClock, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Card({ cardInfo, index }) {
  const [background, setBackground] = useState('');
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (cardInfo.addBackgroundImage) {
      const seed = Math.floor(Math.random() * 1000);
      const imageUrl = `https://picsum.photos/100/100?seed=${seed}`;
      setBackground(imageUrl);
    }
    const randomNumber = Math.floor(Math.random() * 100);
    setProgress(randomNumber);
  }, []);


  return (
    <Draggable draggableId={cardInfo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className="draggable-card bg-white p-2 m-2 shadow-md rounded-md"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {cardInfo.addBackgroundImage && (
            <div className='w-full h-32 relative my-2'>
              <img src={background} alt="" className='w-full h-full object-cover rounded-md' />
            </div>
          )}
          <div className="bg-white h-3 w-full rounded-full my-1">
            <div className="bg-teal-500 h-full rounded-full "
              style={{ width: `${progress}%`}} 
            ></div>
          </div>
          <p className="text-xl">{cardInfo.title}</p>


          <div className="flex items-center justify-between p-2 ">
            <div className="flex space-x-4">
              <span >
                <FontAwesomeIcon icon={faClock} className='mr-3  text-gray-500' />
                {cardInfo.deadline && cardInfo.deadline}
              </span>
              <span>
                <FontAwesomeIcon icon={faBars} className='text-gray-500' />
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {/* Circular profile photo */}
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={cardInfo.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      )}
    </Draggable>
  );
}