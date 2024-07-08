import styles from './styles.module.css';

export const Button = ({ 
    children, 
    red = false, 
    small = false, 
    style = {}, 
    fullWidth = true,
    ...props 
}) => {
    return (
        <button
            className={`${styles.button} ${small ? styles.small : ''}`}
            style={{
                ...style,
                backgroundColor: 
                    red ? "var(--red)" : style.backgroundColor ? style.backgroundColor : "var(--dark-purple)",
                width: fullWidth ? '100%' : 'fit-content',
            }}
            {...props}
        >
            {children}
        </button>
    )
}