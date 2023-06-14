import style from './style.module.css'
import React from 'react'


function Item({ name, description, location}) {

    return (
        <div className={style.wrapper}>
            <div className={style.block}>
                <h1>{name}</h1>
                <p>{description}</p>
                <div className={style.flex}>
                    <div className={style.icon}></div>
                    <p>{location}</p>
                </div>
            </div>

        </div>

    )
}

export default Item