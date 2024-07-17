import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { MainLayout } from '../layouts/main';

import styles from '../styles/RegisterStock.module.css';

import * as StockService from '../service/stocks';
import { useAuth } from '../hooks/useAuth';

function ViewStock() {
    
    const [stockToDelete, setStockToDelete] = useState(null);
    const [stocks, setStocks] = useState([]);
    const { userId } = useAuth();

    const deleteStock = async () => {
        try {
            await StockService.deleteStock({ stockId: stockToDelete.id });
            setStocks((prev) => prev.filter((stock) => stock.id !== stockToDelete.id));
            setStockToDelete(null);
        } catch {
            alert('Erro ao deletar o estoque.');
        }
    };

    useEffect(() => {
        StockService.getStocks(userId).then((res) => {
            setStocks(res.data.stocks);
        });
    }, [userId]);

    return (
        <MainLayout>
            <h2>Meus estoques</h2>
        
            <div className={styles.view_container}>
                {stocks.map((stock) => (
                    <div className={styles.view_box} div={stock.id} key={stock.id}>
                        <h3>{stock.name}</h3>
                        <span>{stock.category}</span>
                        <div className={styles.description}>
                            {stock.description}
                        </div>
                        <Link to={`/estoque/${stock.id}`}>
                            <Button small style={{ marginBottom: '0.5rem' }}>
                                Ver estoque
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
                <div style={{ marginBottom: '1rem' }}>{stockToDelete?.name}</div>

                <div className={styles.button_section}>
                    <Button onClick={() => setStockToDelete(null)}>
                        Não, quero mantê-lo.
                    </Button>
                    <Button red onClick={deleteStock}>
                        Sim, quero exclui-lo!
                    </Button>
                </div>
            </Modal>
        </MainLayout>
    );
}

export default ViewStock;
