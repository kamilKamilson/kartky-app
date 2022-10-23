import { Outlet } from 'react-router-dom';
import styles from './Auth.module.scss';

export const Auth = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.logoWrapper}>
          <img src="/logo.png" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
