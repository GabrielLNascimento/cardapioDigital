import { bolosProntos } from '../../assets/bolosProntos.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { ArrowBigLeft } from 'lucide-react';

// components
import Button from '../../components/Button';

const BolosProntos = () => {
    const [bolos, setBolos] = useState([]);

    useEffect(() => {
        setBolos(bolosProntos);
    }, []);

    return (
        <>
            <div className={styles.btnVoltar}>
                <Button text={<ArrowBigLeft />} destino={'/'} tipo="back" />
            </div>

            <div className={styles.bolosContainer}>
                {bolos.map((bolo) => (
                    <div key={bolo.nome} className={styles.boloItem}>
                        <div>
                            <img src={bolo.imagem} alt={bolo.nome} />
                        </div>
                        <div className={styles.overlay}>
                            <h3>{bolo.nome}</h3>
                            <p>R$: {bolo.preco},00</p>
                            <div className={styles.containerVerMais}>
                                <Link
                                    to={`/boloProntoInfo/${bolo.id}`}
                                    className={styles.btnVerMais}
                                >
                                    Ver mais
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BolosProntos;
