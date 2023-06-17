import React, { useState } from "react"
import CreateOperation from "../../components/CreateOperation/CreateOperation"
import Header from "../../components/Header/Header"
import style from './style.module.css'
import UpdateOperation from "../../components/UpdateOperation/UpdateOperation"
import DeleteOperation from "../../components/DeleteOperation/DeleteOperation"

function AdministrationPage() {
    const [operation, setOperation] = useState('create')

    return (
        <>
            <Header />
            <div className={style.navigation}>
                <p onClick={() => setOperation('create')}>Создание </p>
                <p onClick={() => setOperation('update')}>Обновление</p>
                <p onClick={() => setOperation('delete')}>Удаление</p>
            </div>
            {operation == "create" ? <CreateOperation /> :
                operation == "update" ? <UpdateOperation /> :
                    operation == "delete" ? <DeleteOperation /> : null}

        </>
    )
}

export default AdministrationPage