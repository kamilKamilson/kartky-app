import { Outlet } from 'react-router-dom';
import styles from './Auth.module.scss';

export const Auth = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.formWrapper}>
          <Outlet />
        </div>
        <div className={styles.iconWrapper}>
          <img src="/icon-white.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};
