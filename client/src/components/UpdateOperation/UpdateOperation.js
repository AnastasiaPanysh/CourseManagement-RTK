import React, { useState } from "react"
import style from './style.module.css'
import { Input, Button, Select } from '@mantine/core';
import { useGetCourseQuery, useUpdateCourseMutation, useGetCourseByIdQuery } from '../../services/course'

function UpdateOperation() {
    const [updateCourse] = useUpdateCourseMutation()
    const [value, setValue] = useState({ id: '', name: '', description: '', location: '' })
    const { data: foundCourse } = useGetCourseByIdQuery(value?.id)
    const { data: courses } = useGetCourseQuery()
    console.log('ggg', foundCourse);
    function changeValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    function sendRequest() {
        updateCourse(value)
        window.location.reload()
    }

    return (
        <div className={style.wrapper}>
            <div className={style.before}>
                <h2>До</h2>
                <Select
                    name='id'
                    placeholder="Pick one"
                    data={courses?.map((el) => el.id) ?? []}
                    onChange={(event) => setValue({ ...value, id: event })}
                />
                {foundCourse ? <div>
                    <Input value={foundCourse?.name} disabled />
                    <Input value={foundCourse?.description} disabled />
                    <Input value={foundCourse?.location} disabled />
                </div> : null}

            </div>
            <div className={style.after} >
                <h2>После</h2>
                <Input onChange={changeValue} name='name' placeholder='course name' />
                <Input onChange={changeValue} name='description' placeholder='course description' />
                <Input onChange={changeValue} name='location' placeholder='course location' />
                <Button onClick={sendRequest}>применить</Button>
            </div>
        </div>
    )
}

export default UpdateOperation