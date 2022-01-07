import { Link } from "react-router-dom"
import styles from './MainNavigation.module.css'
import { useContext } from "react"
import { FavoritesContext } from "../../store/favorites.context"

export const MainNavigation = () => {
    const context = useContext(FavoritesContext);
    const qtdFavorites = context.totalFavorites;
    return <header className={styles.header}>
        <div className={styles.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        All Meetups
                    </Link>
                </li>
                <li>
                    <Link to="/new-meetup">
                        New Meetup
                    </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        MyFavorites 
                        <span className={styles.bagde}>{qtdFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}