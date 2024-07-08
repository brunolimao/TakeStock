import { Link } from "react-router-dom";
import { MainLayout } from "../layouts/main";

import styles from '../styles/Products.module.css';
import { Button } from "../components/Button";

export const ViewProducts = function() {
    return (
        <MainLayout>
            <div className={styles.container}>
                <h3>Estoque</h3>
                <div className={styles.subcontainer}>
                    <div className={styles.content}>
                        <h4>Supermercado da turma</h4>
                        <span className={styles.category}>Alimentício</span>
                        <p>Produtos alimentícios dos mais variados e de qualidade acima...</p>
                    </div>
                    <div className={styles.buttons}>
                        <Link to="/estoque/editar">
                            <Button small>
                                Editar
                            </Button>
                        </Link>

                        <Button red small>
                            Excluir
                        </Button>
                    </div>
                </div>

                <hr />

                <h4>Produtos</h4>
                <Link to="/produtos/cadastrar">
                    <Button fullWidth={false}>Cadastrar novo produto</Button>
                </Link>

                <div className={styles.subcontainer}>    
                    <div className={styles.content}>
                        <h5>Produto 1</h5>
                        <span className={styles.category}>Categoria</span>
                        <p>Descrição do produto</p>
                    </div>
                    <div className={styles.buttons}>
                        <Link to="/produtos/editar">
                            <Button>
                                Editar
                            </Button>
                        </Link>

                        <Button red>
                            Excluir
                        </Button>
                    </div>
                </div>

                <div className={styles.subcontainer}>    
                    <div className={styles.content}>
                        <h5>Produto 1</h5>
                        <span className={styles.category}>Categoria</span>
                        <p>Descrição do produto</p>
                    </div>
                    <div className={styles.buttons}>
                        <Link to="/produtos/editar">
                            <Button>
                                Editar
                            </Button>
                        </Link>

                        <Button red>
                            Excluir
                        </Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default ViewProducts;