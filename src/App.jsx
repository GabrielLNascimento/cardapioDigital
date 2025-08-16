import styles from './styles/main.module.css';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home/';
import Personalizar from './pages/Personalizar';
import BolosProntos from './pages/boloPronto';
import BoloProntoInfo from './pages/BoloProntoInfo';

const App = () => {
    return (
        <div className={styles.appContainer}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personalizar" element={<Personalizar />} />
                <Route path="/bolosprontos" element={<BolosProntos />} />
                <Route path="/boloProntoInfo/:id" element={<BoloProntoInfo />} />
            </Routes>
        </div>
    );
};

export default App;
