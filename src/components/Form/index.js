import React, { useState } from 'react';
import './form.css';
import { Input, Select } from '../Inputs';
import Button from '../Buttons';

function Form({ optionsList, handleCreateCollaborator }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [time, setTime] = useState('');

  const createCollaborator = (event) => {
    event.preventDefault();
    const data = {
      name,
      role,
      image,
      time,
    };
    handleCreateCollaborator(data);
  };
  return (
    <section className="form">
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <form onSubmit={createCollaborator}>
        <Input
          label="Nome"
          typeText="text"
          placeHolder="Digite o seu nome"
          handleValue={(valueName) => setName(valueName)}
        />
        <Input
          label="Cargo"
          typeText="text"
          placeHolder="Digite o seu cargo"
          handleValue={(valueRole) => setRole(valueRole)}
        />
        <Input
          label="Imagem"
          typeText="text"
          placeHolder="Digite o endereço da imagem"
          handleValue={(valueImage) => setImage(valueImage)}
        />
        <Select
          label="Time"
          placeHolder="Escoha um time"
          listOptions={optionsList}
          handleValue={(valueTime) => setTime(valueTime)}
        />
        <Button type="submit" />
      </form>
    </section>
  );
}

export default Form;
