import style from './Habilidades.module.css'

function Habilidades() {
    return(
        <div>
            <h1 className={style.tittle}>
                Habilidades
            </h1>
                Ferramentas que sei utilizar:
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>React</li>
                <li>Git</li>
            </ul>
        </div>
    )
}

export default Habilidades