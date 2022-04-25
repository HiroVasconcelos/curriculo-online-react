import {Link} from 'react-router-dom'
import Img from '../../img/fotoPerfil.jpeg'
import style from './Navbar.module.css'

function Navbar() {
    return(
        <div>
            <Link to="/"><img className={style.image} src={Img} alt="fotoPerfil"/></Link>
            <ul className={style.list}>
                <li>
                    <Link to="/habilidades">
                        <button className={style.item}>
                            Habilidades
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/experiencia">
                        <button className={style.item}>
                            Experiência
                        </button>
                    </Link>
                </li>
            </ul>
            <ul className={style.list}>
                <li>
                    <Link to="/educacao">
                        <button className={style.item}>
                            Educação
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/contatos">    
                        <button className={style.item}>
                            Contatos
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar