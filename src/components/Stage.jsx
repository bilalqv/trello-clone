import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import AddNew from "./AddNew";

export default function Stage({ stage, index }) {
  return (
    <div className="p-3 w-1/4 rounded-md">
      <div className="p-3 bg-gray-200  rounded-md shadow-sm">
        <p className='text-xl font-bold '>{stage.title}</p>
        <Droppable droppableId={stage.id.toString()} type="CARD">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {stage.children &&
                stage.children.map((child, index) => (
                  <Card key={child.id} cardInfo={child} index={index} />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className="mt-2">
          <AddNew type="card" parentId={stage.id} />
        </div>
      </div>
    </div>
  );
}