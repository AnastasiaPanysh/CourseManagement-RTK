import { Input, Button } from '@mantine/core';

import {useCreateCourseMutation} from '../../services/course'
import React, { useState } from 'react';


function CreateOperation() {
    const [createCourse]  = useCreateCourseMutation()
    const [value, setValue] = useState({ name: '', description: '', location: '' })

    function sendRequest() {
        createCourse(value)
    }

    function changeInputValue(event) {
        setValue({...value, [event.target.name]: event.target.value})
    }

    return (
        <div className={style.wrapper}>
            <Input name='name' onChange={changeInputValue} placeholder='course name' />
            <Input name='description' onChange={changeInputValue} placeholder='course description' />
            <Input name='location' onChange={changeInputValue} placeholder='course location' />
            <Button onClick={sendRequest}>применить</Button>

        </div>
    )
}

export default CreateOperation