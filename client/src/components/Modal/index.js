import { Dialog } from '@mui/material';
import styles from "./styles.module.css";

export const Modal = ({ title, open, onClose, children }) => {
    return (
        <Dialog open={open} onClose={onClose} PaperProps={{
            className: styles.modal,
        }}>
            <h3>{title}</h3>

            {children}
        </Dialog>
    );
}