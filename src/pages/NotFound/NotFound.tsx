import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p> This page does not exist</p>
    </div>
  );
};

export default NotFound;
