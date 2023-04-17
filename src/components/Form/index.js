import React, { useState } from 'react';
import './form.css';
import { Input, Select } from '../Inputs';
import Button from '../Buttons';

function Form({ optionsList, handleCreateCollaborator, handleTime }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [time, setTime] = useState('');

  const [title, setTitle] = useState('');
  const [colorCard, setColorCard] = useState('');
  const [backGround, setBackGround] = useState('');

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

  const createTime = (event) => {
    event.preventDefault();
    const data = {
      title,
      colorCard,
      backGround,
      collaborators: [],
    };
    handleTime(data);
  };

  return (
    <section className="contentForm">
      <div className="form">
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
          <Button type="submit">
            Criar Card
          </Button>
        </form>
      </div>
      <div className="form">
        <h2>Criar Time</h2>
        <form onSubmit={createTime}>
          <Input
            label="Nome do Time"
            typeText="text"
            placeHolder="Digite o nome do time"
            handleValue={(valueTitle) => setTitle(valueTitle)}
          />
          <Input
            label="Cor de fundo"
            typeText="color"
            handleValue={(valueColorCard) => setColorCard(valueColorCard)}
          />
          <Input
            label="Cor do card"
            typeText="color"
            handleValue={(valueBackGround) => setBackGround(valueBackGround)}
          />
          <Button type="submit">
            Criar Time
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Form;
