import style from './Contatos.module.css'

function Contatos() {
    return(
        <div>
            <h1 className={style.tittle}>
                Contatos
            </h1>
            <p>
                Caso tenha interesse em me contactar ou ver meus projetos, os seguintes links:
            </p>
            <ul>
                <li>Linkedin</li>
                <li>Github</li>
                <li>Email</li>
            </ul>
        </div>
    )
}

export default Contatos