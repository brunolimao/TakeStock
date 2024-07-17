import { Link, useParams } from "react-router-dom";
import { MainLayout } from "../layouts/main";

import styles from '../styles/Products.module.css';
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import { Modal } from "../components/Modal";
import { ProductForm } from "../components/Forms/ProductForm";
import { Avatar } from "@mui/material";

import { getStockById } from '../service/stocks';

import * as ProductService from "../service/products";

export const ViewProducts = function() {

    const { stockId } = useParams();
    
    const [products, setProducts] = useState([]);
    const [stockInfo, setStockInfo] = useState({});
    const [members, setMembers] = useState([]);
 
    const [productToDelete, setProductToDelete] = useState({});
    const [productToEdit, setProductToEdit] = useState({});
    const [newProductModalOpen, setNewProductModalOpen] = useState(false);

    const addNewProduct = async (newProduct) => {
        try {
            await ProductService.createProduct({ ...newProduct, id: productToEdit.id });
            setProducts((prev) => ([...prev, newProduct]));
            setNewProductModalOpen(false);  
        } catch {
            alert('Erro ao cadastrar produto.');
        }
    };

    const editProduct = async (editedProduct) => {
        try {
            await ProductService.updateProduct(editedProduct);

            const oldProductId = productToEdit.id;
            setProducts((prev) => (
                prev.map((prod) => (
                    prod.id === oldProductId
                        ? editedProduct
                        : prod
                ))
            ));

            setProductToEdit({});
        } catch {
            alert('Erro ao editar produto.');
        }
    };

    const deleteProduct = async () => {
        try {
            await ProductService.deleteProduct(productToDelete.id);
            setProducts((prev) => prev.filter((prod) => prod.id !== productToDelete.id));
            setProductToDelete({});
        } catch {
            alert('Erro ao deletar produto.');
        }
    };

    useEffect(() => {
        if (stockId) {
            getStockById(stockId).then((res) => {
                setProducts(res.data.products);
                setStockInfo(res.data.stock);
                setMembers([res.data.owner, ...res.data.users]);
            }).catch(() => alert('Erro ao buscar informações.'));
        }
    }, [stockId]);

    return (
        <MainLayout>
            <div className={styles.container}>
                <h3>Estoque</h3>
                <div className={styles.subcontainer}>
                    <div className={styles.content}>
                        <h4>{stockInfo.name}</h4>
                        <span className={styles.category}>{stockInfo.category}</span>
                        <p>{stockInfo.description}</p>
                    </div>
                    <div className={styles.buttons}>
                        <Link to={`/estoque/editar/${stockId}`}>
                            <Button small>
                                Editar
                            </Button>
                        </Link>
                    </div>
                </div>

                <hr />

                <h4>Membros</h4>
                <Link to={`/estoque/${stockId}/membros`}>
                    <Button small fullWidth={false}>
                        Gerenciar membros
                    </Button>
                </Link>
                <div className={styles.members}>
                    {members.map((m) => (
                        <Avatar key={m.email}>{m.name[0].toUpperCase()}</Avatar>
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