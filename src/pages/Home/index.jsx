import styles from './styles.module.css';
import { Phone } from 'lucide-react';

// components
import Button from '../../components/Button';

const Home = () => {
    return (
        <section className={styles.homeContainer}>
            <div className={styles.logo}>Logo</div>

            <div className={styles.homeOptions}>
                <Button text="Personalizar" destino="/personalizar" />
                <Button text="Bolos Prontos" destino="/bolosprontos" />
            </div>

            <div className={styles.btnContato}>
                <button>
                    <Phone />
                </button>
            </div>
        </section>
    );
};

export default Home;
