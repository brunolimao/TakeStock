import styles from './styles.module.css';

export const Button = ({ children, red = false, style = {}, ...props }) => {
    return (
        <button
            className={styles.button}
            style={{
                ...style,
                backgroundColor: 
                    red ? "var(--red)" : style.backgroundColor ? style.backgroundColor : "var(--dark-purple)",
            }}
            {...props}
        >
            {children}
        </button>
    )
}