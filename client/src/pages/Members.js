import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

import { MainLayout } from '../layouts/main';

import styles from '../styles/Members.module.css';
import { MemberForm } from '../components/Forms/MemberForm';

import * as StockService from '../service/stocks';
import { useParams } from 'react-router-dom';

export function Members() {
    const [members, setMembers] = useState([]);
    const { stockId } = useParams();

    const [openNewMemberModal, setOpenNewMemberModal] = useState(false); 

    const addNewMember = (newMember) => {
        setMembers((prev) => ([...prev, newMember]));
        setOpenNewMemberModal(false);
    };

    useEffect(() => {
        if (stockId) {
            StockService.getStockMembers(stockId)
        }
    }, [stockId]);

    return (
        <MainLayout>
            <div className={styles.container}>
                <h3>Gerenciar membros da equipe</h3>

                {members.map((m) => (
                    <div className={styles.member} key={m.name}>
                        <Avatar />
                        <span className={styles.name}>{m.name}</span>
                        <span className={styles.email}>{m.email}</span>
                        <input type="checkbox" checked={m.isAdmin} name={`${m.name}-isAdmin`} />
                        <label htmlFor={`${m.name}-isAdmin`}>admin</label>
                    </div>
                ))}

                <Button onClick={() => setOpenNewMemberModal(true)} small>
                    Adicionar novo membro
                </Button>
            </div>

            <Modal
                open={openNewMemberModal}
                onClose={() => setOpenNewMemberModal(false)}
                title="Adicionar novo membro"
            >
                <MemberForm action={addNewMember} />
            </Modal>
        </MainLayout>
    );
}