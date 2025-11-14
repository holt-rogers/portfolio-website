"use client"; 
import React from 'react';
import projectTitles from "./project_data"


function ProjectPanel(){

}

function ProjectList() {
    const buttonData = [
        { id: 1, title: 'Navy Missile Optimization', summary: 'A program that optimizes the ideal stage size for a multi-stage missile.'},
        { id: 2, title: 'Motion Controlled Mouse', summary: 'A computer mouse controlled by rotation using Arduino.'},
        { id: 3, title: 'PenGuin', summary: 'A note taking app designed for STEM problem solving.'},
    ];

    const handleButtonClick = (buttonId) => {
        console.log(`Button ${buttonId} clicked!`);
        // Add your specific logic here based on which button was clicked
      };

      return (
        <div className="flex flex-col items-left space-y-6">
          {projectTitles.map((button) => (
            <button key={button.id} onClick={() => handleButtonClick(button.id)} className = "text-left text-xl text-gray-200 hover:text-white font-medium">
                      
                <div className="flex flex-col items-left space-y-5 mt-1 mb-1 text-gray-200">
                    {button.title}
                </div>

                <div className="flex flex-col items-left space-y-5 mt-1 mb-1 text-gray-400">
                    {button.summary}
                </div>

            </button>

          ))}
        </div>
      );
    }

    export default ProjectList;

