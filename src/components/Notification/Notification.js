import React from 'react';
import styles from './Notification.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Notification = () => {
    const notification=useSelector(state=>state.UI.notification)
    const [type,setType]=useState('');
     setType(notification.status)


  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <p>{notification.status}<span>{notification.message}</span></p>
    </div>
  );
};

export default Notification;