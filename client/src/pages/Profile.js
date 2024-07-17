
import { Button } from "../components/Button";
import { MainLayout } from "../layouts/main";
import { Avatar } from "@mui/material";
import axios from "axios";
import { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

import styles from '../styles/Profile.module.css';

function Profile() {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/users/perfil',{withCredentials: true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },},).then((response) =>{
            setName(response.data.user.name)
            setEmail(response.data.user.email)
        })
           
    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();
            try {
              await axios.get('http://localhost:3001/users/logout',{withCredentials: true,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                },},
          )
          navigate("/")
            } catch (error) {
                alert(error.response.data.error)
            }
      }
    

  return (
      <MainLayout>
          <div className={styles.container}>
              <Button red fullWidth={false} onClick={handleSubmit}>
                  Sair
              </Button>
              
              <h2>Perfil</h2>

              <div className={styles.content}>
                  <Avatar sx={{ width: '200px', height: '200px' }} />

                  <div className={styles.info}>
                      <span>Nome</span>
                      <div>{name}</div>
                  </div>

                  <div className={styles.info}>
                      <span>E-mail</span>
                      <div>{email}</div>
                  </div>
              </div>
          </div>
      </MainLayout>
  );
}

export default Profile;