import { ContainerHome } from './home.styled'
import Cabecalho from '../../components/common/cabecalho/index'

export default function Homepage() {
    return (
        <ContainerHome>
        <Cabecalho />
            <div className="container-mae">
                <div className='box'>
                    <div className="Titulo">
                        <h1>Sua casa é seu lar, onde você pode descansar</h1> 
                    </div>
                    <div className="Subtitulo">
                        <h1>A ArchHouse pode torná-la mais confortável!</h1> 
                    </div>
                    <div className="Botao">
                        <button>Entre em contato</button>
                    </div>
                </div>
            </div>
        </ContainerHome>
    )
}