import React, { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Times';

function App() {
  const [times, setTimes] = useState([{
    title: 'Programação',
    colorCard: '#57C278',
    backGround: '#D9F7E9',
    collaborators: [],
  },
  {
    title: 'Front End',
    colorCard: '#82CFFA',
    backGround: '#E8F8FF',
    collaborators: [],
  },
  {
    title: 'Data Science',
    colorCard: '#A6D157',
    backGround: '#F0F8E2',
    collaborators: [],
  },
  {
    title: 'DevOps',
    colorCard: '#E06B69',
    backGround: '#FDE7E8',
    collaborators: [],
  },
  {
    title: 'UX Designer ',
    colorCard: '#DB6EBF',
    backGround: '#FAE9F5',
    collaborators: [],
  },
  {
    title: 'Mobile ',
    colorCard: '#FFBA05',
    backGround: '#FFF5D9',
    collaborators: [],
  },
  {
    title: 'Inovação e gestão ',
    colorCard: '#FF8A29',
    backGround: '#FFEEDF',
    collaborators: [],
  },
  ]);

  const createTime = (data) => {
    setTimes(
      times.map((time, key) => {
        if (key.toString() === data.time) {
          time.collaborators.push(data);
        }
        return time;
      }),
    );
  };

  const delCollaborator = (name, idTime) => {
    setTimes(
      times.map((time, key) => {
        if (key === idTime) {
          const dataCollaborator = time.collaborators.filter((item) => item.name === name);
          time.collaborators.splice(dataCollaborator, 1);
        }
        return time;
      }),
    );
  };

  const createOptionTime = (data) => {
    setTimes([...times, data]);
  };

  return (
    <div>
      <Banner />
      <Form
        optionsList={times.map((item) => item.title)}
        handleCreateCollaborator={createTime}
        handleTime={createOptionTime}
      />
      <Time allTimes={times} deleteCollaborator={delCollaborator} />
    </div>
  );
}

export default App;
