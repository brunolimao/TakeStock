
import { Button } from "../components/Button";
import { MainLayout } from "../layouts/main";
import { Avatar } from "@mui/material";

import styles from '../styles/Profile.module.css';

function Profile() {
  return (
      <MainLayout>
          <div className={styles.container}>
              <Button red fullWidth={false}>
                  Sair
              </Button>
              
              <h2>Perfil</h2>

              <div className={styles.content}>
                  <Avatar sx={{ width: '200px', height: '200px' }} />

                  <div className={styles.info}>
                      <span>Nome</span>
                      <div>Maria</div>
                  </div>

                  <div className={styles.info}>
                      <span>E-mail</span>
                      <div>maria@email</div>
                  </div>
              </div>
          </div>
      </MainLayout>
  );
}

export default Profile;