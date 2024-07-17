import styles from '../styles/Main.module.css';

import takeStockLogo from '../assets/logo.png';
import profileIcon from '../assets/ProfileIcon.png';
import stockIcon from '../assets/StockIcon.png';

import { Link } from 'react-router-dom';

export const MainLayout = function({ children, currentHref }) {
    return (
        <div className={styles.container}>
        
            <div className={styles.sidebar}>
                <div className={styles.sidebar_top}>
                    <img src={takeStockLogo} alt="Take Stock Logo" className={styles.logo} />
                    <Link to="/estoque/visualizar" className={styles.menu_item}>
                        <img src={stockIcon} alt="Stocks" className={styles.icon} />
                        <span>Meus estoques</span>
                    </Link>

                    <Link to="/estoque/cadastro" className={styles.menu_item}>
                        <img src={stockIcon} alt="Stocks" className={styles.icon} />
                        <span>Cadastrar estoque</span>
                    </Link>
                </div>

                <div className={styles.sidebar_middle}>
                </div>

                <div className={styles.sidebar_footer}>
                    <div className={styles.separator}></div>
                    <Link to="/perfil" className={styles.menu_item}>
                        <img src={profileIcon} alt="Profile" className={styles.icon} />
                        <span>Perfil</span>
                    </Link>
                </div>
            </div>

            <div>
                {children}
            </div>

        </div>
    );
}