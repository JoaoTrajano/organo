import React from 'react';
import './time.css';
import CardCollaborator from '../CardCollaborator';

function Time({ allTimes, deleteCollaborator }) {
  return (
    <section className="content">
      {allTimes.map((time, key) => (
        time.collaborators.length > 0
        && (
        <div className="time" style={{ backgroundColor: time.backGround }}>
          <h1>{time.title}</h1>
          <div className="collaborator">
            { time.collaborators.map((collaborator, index) => (
              <CardCollaborator
                id={index}
                idTime={key}
                name={collaborator.name}
                role={collaborator.role}
                strImg={collaborator.image}
                colorCard={time.colorCard}
                handleDeleteCollaborator={deleteCollaborator}
              />
            ))}
          </div>
        </div>
        )
      ))}
    </section>
  );
}

export default Time;
