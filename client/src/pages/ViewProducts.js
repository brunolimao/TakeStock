import { Link } from "react-router-dom";
import { MainLayout } from "../layouts/main";

import styles from '../styles/Products.module.css';
import { Button } from "../components/Button";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { ProductForm } from "../components/Forms/ProductForm";
import { Avatar } from "@mui/material";

export const ViewProducts = function() {
    
    const [products, setProducts] = useState([
        {
            name: 'Produto 1',
            category: 'Categoria',
            description: 'Descrição do produto',
            price: 10.0,
            amount: 50,
        },
        {
            name: 'Produto 2',
            category: 'Categoria',
            description: 'Descrição do produto',
            price: 123.50,
            amount: 2,
        },
    ]);

    const [productToDelete, setProductToDelete] = useState({});
    const [productToEdit, setProductToEdit] = useState({});
    const [newProductModalOpen, setNewProductModalOpen] = useState(false);

    const addNewProduct = (newProduct) => {
        setProducts((prev) => ([...prev, newProduct]));
        setNewProductModalOpen(false);
    };

    const editProduct = (editedProduct) => {
        const oldProductName = productToEdit.name;
        setProducts((prev) => (
            prev.map((prod) => (
                prod.name === oldProductName
                    ? editedProduct
                    : prod
            ))
        ));

        setProductToEdit({});
    };

    const deleteProduct = () => {
        setProducts((prev) => prev.filter((prod) => prod.name !== productToDelete.name));
        setProductToDelete({});
    };

    const members = ['Ana', 'Bruno', 'Guilherme', 'Maria'];

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
                    </div>
                </div>

                <hr />

                <h4>Membros</h4>
                <Link to="/membros">
                    <Button small fullWidth={false}>
                        Gerenciar membros
                    </Button>
                </Link>
                <div className={styles.members}>
                    {members.map((m) => (
                        <Avatar key={m}>{m[0]}</Avatar>
                    ))}
                </div>

                <hr />

                <h4>Produtos</h4>
                <Button 
                    fullWidth={false} 
                    onClick={() => setNewProductModalOpen(true)}
                >
                    Cadastrar novo produto
                </Button>

                {products.map((prod) => (
                    <div key={prod.name} className={styles.subcontainer}>    
                        <div className={styles.content}>
                            <h5>{prod.name}</h5>
                            <span className={styles.category}>{prod.category}</span>
                            <p>{prod.description}</p>
                        </div>
                        <div className={styles.buttons}>
                            <Button onClick={() => setProductToEdit(prod)}>
                                Editar
                            </Button>

                            <Button red onClick={() => setProductToDelete(prod)}>
                                Excluir
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                open={!!productToDelete.name}
                onClose={() => setProductToDelete({})}
                title={`Tem certeza que deseja excluir ${productToDelete.name}?`}
            >
                <span>Atenção, esta ação não poderá ser desfeita.</span>

                <div className={styles.modal_buttons}>
                    <Button onClick={() => setProductToDelete({})}>
                        Não, quero mantê-lo.
                    </Button>

                    <Button red onClick={() => deleteProduct()}>
                        Sim, quero exclui-lo!
                    </Button>
                </div>
            </Modal>

            <Modal
                open={newProductModalOpen}
                onClose={() => setNewProductModalOpen(false)}
                title="Cadastrar novo produto"
            >
                <ProductForm action={addNewProduct} />
            </Modal>

            <Modal
                open={!!productToEdit.name}
                onClose={() => setProductToEdit({})}
                title={`Editar: ${productToEdit.name}`}
            >
                <ProductForm defaultValues={productToEdit} action={editProduct} />
            </Modal>
        </MainLayout>
    );
}

export default ViewProducts;