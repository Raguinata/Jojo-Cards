import Personagem from '../Personagem'
import './Parte.css'

const Parte = (props) => {
    return(
        props.cards.length > 0 && <section className='parte' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='personagens'>
                {props.cards.map(card => <Personagem corDeFundo={props.corPrimaria} key={card.nome} nome={card.nome} stand={card.stand} imagem={card.imagem}/>)}
            </div>
        </section>
    )
}

export default Parte