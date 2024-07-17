import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { MainLayout } from '../layouts/main';

import styles from '../styles/RegisterStock.module.css';

import * as StockService from '../service/stocks';

function ViewStock() {
    
    const [stockToDelete, setStockToDelete] = useState(null);
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        StockService.getStocks().then((res) => {
            setStocks(res.data.stocks);
        });
    }, []);

    return (
        <MainLayout>
            <h2>Meus estoques</h2>
        
            <div className={styles.view_container}>
                {stocks.map((stock) => (
                    <div className={styles.view_box}>
                        <h3>{stock.name}</h3>
                        <span>{stock.category}</span>
                        <div className={styles.description}>
                            {stock.description}
                        </div>
                        <Link to={`/estoque/${stock.id}/produtos`}>
                            <Button small style={{ marginBottom: '0.5rem' }}>
                                Ver produtos
                            </Button>
                        </Link>
                        <div className={styles.button_section}>
                            <Button>
                                <Link to={`/estoque/editar/${stock.id}`}>
                                    Editar
                                </Link>
                            </Button>
                            
                            <Button red onClick={() => setStockToDelete(stock)}>
                                Excluir
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal 
                open={stockToDelete !== null} 
                onClose={() => setStockToDelete(null)}
                title="Tem certeza que deseja excluir esse estoque?"
            >
                <div className={styles.button_section}>
                    <Button>
                        Não, quero mantê-lo.
                    </Button>
                    <Button red>
                        Sim, quero exclui-lo!
                    </Button>
                </div>
            </Modal>
        </MainLayout>
    );
}

export default ViewStock;
