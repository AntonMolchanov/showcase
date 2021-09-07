import React from 'react';
import styles from './Customer.module.scss'
import customer from '../../icons/customer.svg'
import Avatar from "./Avatar/Avatar";

function Customer({name,lvl}) {
    return (
        <div className={styles.customer}>
            <Avatar avatar={customer} level={70}/>
            <div className={styles.info}>
                <p className={styles.customerName}>{name}</p>
                <div className={styles.level}>
                    <p className={styles.levelText}>{lvl}</p>
                </div>
            </div>
        </div>
    );
}

export default Customer;