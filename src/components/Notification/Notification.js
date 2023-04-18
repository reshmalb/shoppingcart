import React from 'react';
import styles from './Notification.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Notification = props => {




  return (
    <div className={`${styles.notification} ${styles[props.status]}`}>
      <p>{props.title}{"    "}
    {props.message}</p>
    </div>
  );
};

export default Notification;