import { Link } from 'react-router-dom'
import style from './style.module.css'

function Header() {
    return (
        <div className={style.wrapper}>
            <h1>CoursesRUD.</h1>

            <nav>
                <p>
                    <Link to='/admin'>Администрирование</Link>
                </p>

                <p>
                    <Link to='/'>Просмотр</Link>
                </p>
            </nav>
        </div>
    )
}

export default Header