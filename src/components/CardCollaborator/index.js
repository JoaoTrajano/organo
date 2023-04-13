import React from 'react';
import './CardCollaborator.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import DeleteIcon from '@mui/icons-material/Delete';

function CardCollaborator({
  idTime, name, role, strImg, colorCard, handleDeleteCollaborator,
}) {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: colorCard }}>
        <button className="deleteIcon" onClick={() => handleDeleteCollaborator(name, idTime)}>
          <DeleteIcon />
        </button>
        <img src={strImg} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}

export default CardCollaborator;
