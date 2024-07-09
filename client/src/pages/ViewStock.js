import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { MainLayout } from '../layouts/main';

import styles from '../styles/RegisterStock.module.css';

function ViewStock() {
    
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    return (
        <MainLayout>
            <h2>Meus estoques</h2>
        
            <div className={styles.view_container}>
                <div className={styles.view_box}>
                    <h3>Supermercado da turma</h3>
                    <span>Alimentícios</span>
                    <div className={styles.description}>
                        Estoque de produtos alimentícios variados, incluindo ingredientes básicos e itens gourmet, todos de alta qualidade. Produtos frescos, selecionados para atender diferentes necessidades alimentares e gastronômicas.
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
        </MainLayout>
    );
}

export default ViewStock;
