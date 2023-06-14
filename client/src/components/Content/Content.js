import React from 'react'
import Item from "./Item";
import style from './style.module.css'
import { useGetCourseQuery } from '../../services/course'

function Content() {
    const { data: dataAll } =  useGetCourseQuery()
    return (
        <div  className={style.flex}>
            {dataAll?.map((el) => <Item key={el.id} name={el.name} description={el.description} location={el.location} />)}
        </div>
    );
}


export default Content;