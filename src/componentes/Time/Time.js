import Colaborador from '../Colaborador/Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
  return (
    props.colaboradores.length > 0 &&
      <section className="time" style={{ backgroundColor: hexToRgba(props.cor, '0.6') }}>
          <input onChange={evento => props.mudarCor(evento.target.value, props.id)} type="color" value={props.cor} className='input-cor'/>
          <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
          <div className='colaboradores'>
            {props.colaboradores.map( (colaborador, indice) => {
                return <Colaborador aoDeletar={props.aoDeletar} corDeFundo={props.cor} key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>
            })}
          </div>
      </section>
  )
}

export default Time;
