import style from './Home.module.css'

function Home() {
    return(
        <div>
            <h1 className={style.tittle}>
                Bem Vindo!
            </h1>
            <p> 
                Bem vindo ao meu Currículo Online, para me conhecer melhor é só clicar em uma dessas abas acima.
            </p>
        </div>
    )
}

export default Home