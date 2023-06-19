import React, { useState } from "react"
import style from './style.module.css'
import { Input, Button, Select } from '@mantine/core';
import { useGetCourseQuery, useDeleteCourseMutation, useGetCourseByIdQuery } from '../../services/course'

function DeleteOperation() {
    const [deleteCourse] = useDeleteCourseMutation()
    const [value, setValue] = useState({ id: ''})
    const { data: foundCourse } = useGetCourseByIdQuery(value?.id)
    const { data: courses } = useGetCourseQuery()
    console.log('ggg', foundCourse);

    function sendRequest() {
        deleteCourse(value)
        window.location.reload()
    }

    return (
        <div className={style.wrapper}>

            <h2>До</h2>
            <Select
                name='id'
                placeholder="Pick one"
                data={courses?.map((el) => el.id) ?? []}
                onChange={(event) => setValue({ ...value, id: event })}
            />

            <Button onClick={sendRequest}>Удалить</Button>
            {foundCourse ? <div>
                <Input value={foundCourse?.name} disabled />
                <Input value={foundCourse?.description} disabled />
                <Input value={foundCourse?.location} disabled />
            </div> : null}

        </div>
    )
}

export default DeleteOperation
