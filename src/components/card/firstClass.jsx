import React from 'react';
import styles from './firstClass.module.css';

const FirstClass = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div
            className={styles.background}
            style={{ backgroundImage: 'url(/images/2.jpg)' }}
          ></div>
          <div className={styles.content}>
            <p className={styles.category}>开学知识宝典</p>
            <h3 className={styles.heading}>求职技巧</h3>
          </div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.background}
            style={{ backgroundImage: 'url(/images/3.jpg)' }}
          ></div>
          <div className={styles.content}>
            <p className={styles.category}>开学知识宝典</p>
            <h3 className={styles.heading}>个人成长</h3>
          </div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.background}
            style={{ backgroundImage: 'url(/images/1.jpg)' }}
          ></div>
          <div className={styles.content}>
            <p className={styles.category}>开学知识宝典</p>
            <h3 className={styles.heading}>学习干货</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstClass;
