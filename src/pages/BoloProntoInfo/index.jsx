import { useParams } from 'react-router-dom';
import { bolosProntos } from '../../assets/bolosProntos.js';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { ArrowBigLeft } from 'lucide-react';

// components
import Button from '../../components/Button';

const BoloProntoInfo = () => {
    const [bolo, setBolo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const boloEncontrado = bolosProntos.find(
            (item) => item.id === parseInt(id)
        );
        setBolo(boloEncontrado || null);
    }, [id]);

    if (!bolo) {
        return <p>Bolo não encontrado</p>;
    }

    return (
        <>
            <div className={styles.btnVoltar}>
                <Button
                    text={<ArrowBigLeft />}
                    destino={'/bolosprontos'}
                    tipo="back"
                />
            </div>
            <div className={styles.boloInfoContainer}>
                <h1>{bolo.nome}</h1>
                <img src={bolo.imagem} alt="" />
                <div>
                    <p>R$: {bolo.preco},00</p>
                    <p>{bolo.desc}</p>
                </div>
            </div>
        </>
    );
};

export default BoloProntoInfo;
