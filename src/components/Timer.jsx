import React, { useState, useEffect } from 'react';
import styles from "./Timer.module.css";

const Timer = () => {
    const [currentDate, setCurrentDate] = useState(new Date ());

    const birthdayDate = new Date (2023, 8, 12, 0, 0, 0, 0);
    birthdayDate.setFullYear(currentDate.getFullYear());


    const mainDate = birthdayDate;

    mainDate.setMonth(mainDate.getMonth() - currentDate.getMonth());
    mainDate.setDate(mainDate.getDate() - currentDate.getDate());
    mainDate.setHours(mainDate.getHours() - currentDate.getHours());
    mainDate.setMinutes(mainDate.getMinutes() - currentDate.getMinutes());
    mainDate.setSeconds(mainDate.getSeconds() - currentDate.getSeconds());


    function refreshCurrentDate() {
        setCurrentDate(new Date())
    }

    useEffect(()=> {
        setInterval(() => {
            refreshCurrentDate()
        }, 1000);
    }, [])

    return (
        <div className={styles.block}>
            <div className={styles.date}>
                <span>{`${mainDate.getMonth()}`}</span>
                <p>months</p>
            </div>

            <div className={styles.date}>
                <span>{`${mainDate.getDate()}`}</span>
                <p>days</p>
            </div>

            <div className={styles.date}>
                <span>{`${mainDate.getHours()}`}</span>
                <p>hours</p>
            </div>

            <div className={styles.date}>
                <span>{`${mainDate.getMinutes()}`}</span>
                <p>minutes</p>
            </div>

            <div className={styles.date}>
                <span>{`${mainDate.getSeconds()}`}</span>
                <p>seconds</p>
            </div>
        </div>
    );
};

export default Timer;
