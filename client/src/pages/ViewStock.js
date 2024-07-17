import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { MainLayout } from '../layouts/main';

import styles from '../styles/RegisterStock.module.css';

function ViewStock() {
    
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/stocks/get_all_stocks',{withCredentials: true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },},).then((response) =>{
            console.log(response.data.stocks)
            setStocks(response.data.stocks)
            
        })
           
      }, []);

      console.log(stocks)

    return (
        <MainLayout>
            <h2>Meus estoques</h2>
          
            {stocks.map((stock, key) => {
                return(
                    <>
                    <div key={key} className={styles.view_container}>
                        <div  className={styles.view_box}>
                            <h3>{stock.name}</h3>
                            <span>{stock.category}</span>
                            <div className={styles.description}>
                                {stock.description}
                            </div>
                            <Link to="/produtos/visualizar">
                                <Button small style={{ marginBottom: '0.5rem' }}>
                                    Ver produtos
                                </Button>
                            </Link>
                            <div className={styles.button_section}>
                                <Button>
                                    <Link to="/estoque/editar">
                                        Editar
                                    </Link>
                                </Button>
                                
                                <Button red onClick={() => setOpenDeleteModal(true)}>
                                    Excluir
                                </Button>
                            </div>
                        </div>
                        </div>

                        <Modal 
                            open={openDeleteModal} 
                            onClose={() => setOpenDeleteModal(false)}
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
                    </>
                )
            })}
      
            
        </MainLayout>
    );
}

export default ViewStock;
