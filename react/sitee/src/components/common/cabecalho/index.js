import { ContainerCabecalho } from "./index.styled"

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <div className="logo">
                <img src='assets/images/ArchHouse-logo.svg' alt=""/>
            </div>
            <div className="perfil">
                <p>Meu Perfil</p>
            </div>
        </ContainerCabecalho>
    )
}

export {Cabecalho}