"use client"

import styles from './characterDiv.module.css';
import { useState} from 'react';

export type Character = {
    id: number;
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;
    origin: {
        name: string;
        url: string;
    }
    location: {
        name: string;
        url: string;
    }
}

export default function CharacterDiv(
    {id, name, gender, status, species, image, nameOrigin, nameLocation}:
    {id:number, name:string, gender:string, status:string,
    species:string, image:string, nameOrigin:string, nameLocation:string}
)
{
    const [showInfo, setShowInfo] = useState(false);
    const [showStatus, setShowStatus] = useState(false);

    function info(){
        return(
            <div className={styles.info}>
                <p>Specie: {species}</p>
                <p>Gender: {gender}</p>
                <p>Location: {nameOrigin}</p>
                <p>Origin: {nameLocation}</p>
                <div className={styles.status}>
                    <p>Status: {showStatus? status: ""}</p>
                    <button type='button' onClick={()=>{setShowStatus(!showStatus)}}>{showStatus?"[hide]":"[show]"}</button> 
                </div>
            </div>
        );
    }

    return (
        <div className={styles.box}>
            <h2>{id} - {name}</h2>
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src={image} alt="character image" width={300} height={300}/>
            
            <button type="button" onClick={()=>{
                setShowInfo(!showInfo);
                setShowStatus(false);
                }}>Info</button>
            {showInfo && info()}
        </div>
    );
}