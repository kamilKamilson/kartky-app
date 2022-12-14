import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';

export const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (location.pathname === '/auth' || location.pathname === '/auth/') && navigate('/auth/login');
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <img src="/icon-white.png" alt="logo" />
        </div>
        <div className={styles.formWrapper}>
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
