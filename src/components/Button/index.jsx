import styles from './styles.module.css';

// bibliotecas
import { Link } from 'react-router-dom';

const Button = ({ text, destino, tipo }) => {
    if (tipo === "back") {
        return (
            <Link to={destino} className={styles.btnBack}>
                {text}
            </Link>
        );
    }
    
    return <Link to={destino} className={styles.button}>{text}</Link>;
};

export default Button;
