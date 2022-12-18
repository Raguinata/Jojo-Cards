import { useState } from "react";
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Parte from "./Componentes/Parte";
import Personagem from "./Componentes/Personagem";

function App() {

  const partes = [
    {
      nome: 'PHANTOM BLOOD',
      corPrimaria: '#4c1eb2',
      corSecundaria: '#c9bbe7'
    },
    {
      nome: 'BATTLE TENDENCY',
      corPrimaria: '#562c1e',
      corSecundaria: '#ccbfbb'
    },
    {
      nome: 'STARDUST CRUSADERS',
      corPrimaria: '#dcc4a0',
      corSecundaria: '#f4ede2'
    },
    {
      nome: 'DIAMOND IS UNBREAKABLE',
      corPrimaria: '#30385C',
      corSecundaria: '#9ba3ca'
    },
    {
      nome: 'VENTO AUREO',
      corPrimaria: '#F8D676',
      corSecundaria: '#fcf2d5'
    },
    {
      nome: 'STONE OCEAN',
      corPrimaria: '#C9F171',
      corSecundaria: '#eefad4'
    },
    {
      nome: 'STEEL BALL RUN',
      corPrimaria: '#6CACD2',
      corSecundaria: '#d2e6f1'
    },
    {
      nome: 'JOJOLION',
      corPrimaria: '#E66594',
      corSecundaria: '#f7d0de'
    }
  ]

  const [cards, setCards] = useState([])

  const aoNovoCardCriado = (card) => {
    console.log(card)
    setCards([...cards, card])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario partes={partes.map(parte => parte.nome)} aoCardCriado={card => aoNovoCardCriado(card)} />

      {partes.map (parte => <Parte 
      key={parte.nome} 
      nome={parte.nome} 
      corPrimaria={parte.corPrimaria} 
      corSecundaria={parte.corSecundaria}
      cards={cards.filter(card => card.parte === parte.nome)} />)}
      

    </div>
  );
}

export default App;
