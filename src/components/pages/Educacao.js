import style from './Educacao.module.css'

function Educacao() {
    return(
        <div>
            <h1 className={style.tittle}>
                Historico educacional
            </h1>
            <p>E.E.E.M André Leão Puente: Formado em 2019.</p>
            <p>Universidade La Salle: Bacharel em Ciência da Computação (2020 - Presente).</p>
        </div>
    )
}

export default Educacao