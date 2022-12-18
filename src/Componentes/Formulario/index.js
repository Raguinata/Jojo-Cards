import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [stand, setStand] = useState('')
    const [imagem, setImagem] = useState('')
    const [parte, setParte] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCardCriado ({
            nome,
            stand,
            imagem,
            parte
        })

        setNome('')
        setStand('')
        setImagem('')
        setParte('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>

                <h2>Crie o Seu Card de Algum Personagem de Jojo's Bizarre Adventure</h2>
                
                <CampoTexto 
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do(a) personagem'
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label='Stand'
                    placeholder='Digite o stand do(a) personagem'
                    valor = {stand}
                    aoAlterado = {valor => setStand(valor)}
                />
                <CampoTexto 
                    label='Imagem'
                    placeholder='Digite o endereço da imagem do(a) personagem'
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />

                <ListaSuspensa 
                obrigatorio={true} label='Parte'
                itens={props.partes}
                valor={parte}
                aoAlterado = {valor => setParte(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario