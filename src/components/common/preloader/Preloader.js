import React from 'react';
import preloaderImg from '../../../assets/images/preload.gif';
import cs from './preloader.module.css';

const Preloader = () => {
    return <div className={cs.preloader}>
        <img alt='' src={preloaderImg} />
    </div>
}

export default Preloader;