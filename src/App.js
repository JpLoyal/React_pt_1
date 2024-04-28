import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9f7e9',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#e8f8ff',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#f0f8e2',
    },
    {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#fde7e8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#fae9f5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#fff5d9',
    },
    {
      id: uuidv4(),
      nome: 'Inova',
      cor: '#ffeedf',
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  };

  function deletarColaborador(){
    console.log('Deletando colaborador')
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time
        mudarCor={mudarCorDoTime}
        key={time.nome}
        id={time.id}
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
      />)}

    </div>
  );
}

export default App;
