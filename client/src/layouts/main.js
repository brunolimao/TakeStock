import styles from '../styles/Main.module.css';

import takeStockLogo from '../assets/logo.png';
import profileIcon from '../assets/ProfileIcon.png';
import infoIcon from '../assets/InfoIcon.png';
import stockIcon from '../assets/StockIcon.png';


export const MainLayout = function({ children, currentHref }) {
    return (
        <div className={styles.container}>
        
            <div className={styles.sidebar}>
                <div className={styles.sidebar_top}>
                    <img src={takeStockLogo} alt="Take Stock Logo" className={styles.logo} />
                    <a href="/estoque/visualizar" className={styles.menu_item}>
                        <img src={stockIcon} alt="Stocks" className={styles.icon} />
                        <span>Meus estoques</span>
                    </a>

                    <a href="/estoque/cadastro" className={styles.menu_item}>
                        <img src={stockIcon} alt="Stocks" className={styles.icon} />
                        <span>Cadastrar estoque</span>
                    </a>
                </div>

                <div className={styles.sidebar_middle}>
                </div>

                <div className={styles.sidebar_footer}>
                    <div className={styles.separator}></div>
                    <a href="/perfil" className={styles.menu_item}>
                        <img src={profileIcon} alt="Profile" className={styles.icon} />
                        <span>Perfil</span>
                    </a>
                    <a href="#help" className={styles.menu_item}>
                        <img src={infoIcon} alt="Help" className={styles.icon} />
                        <span>Ajuda</span>
                    </a>
                </div>
            </div>

            <div>
                {children}
            </div>

        </div>
    );
}