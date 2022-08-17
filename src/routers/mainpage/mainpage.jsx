import React from 'react';
import FirstClass from '../../components/card/firstClass';
import styles from './mainPage.module.css';

const MainPage = (props) => {
  return (
    <div className={styles.mainPage}>
      <FirstClass />
    </div>
  );
};
export default MainPage;
