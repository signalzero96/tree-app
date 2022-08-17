import './app.module.css';
import MainPage from './routers/mainPage/mainPage';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <MainPage />
    </div>
  );
};

export default App;
