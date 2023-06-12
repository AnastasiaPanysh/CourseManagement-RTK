import style from './style.module.css'
import React from 'react'
import { useGetCourseQuery} from '../../services/course'

function Item() {
    const { data: dataAll } = useGetCourseQuery()
    return (
        <div className={style.wrapper}>
            <div className={style.block}>
            {dataAll ? <h2>{JSON.stringify(dataAll)}</h2> : null}
                <p>В течение курса студенты ознакомятся с ...</p>
                <div className={style.flex}>
                    <div className={style.icon}></div>
                    <p>aaa</p>
                </div>
            </div>
            <div className={style.block}>
                <h2>C# Couse</h2>
                <p>В течение курса студенты ознакомятся с ...</p>
                <div className={style.flex}>
                    <div className={style.icon}></div>
                    <p>aaa</p>
                </div>
            </div>
        </div>
    )
}

export default Item