import React, { useState } from "react"
import { Input, Button } from '@mantine/core';
import style from './style.module.css';
import { IconSearch } from '@tabler/icons-react';

function Search({ setSearchString }) {
  const [input, setInput] = useState('')

  function showValueInput() {
    setSearchString(input)
  }

  return (
    <div className={style['wrapper']}>
      <Input
        onChange={(event) => setInput(event.target.value)}
        className={style.inp}
        size="md"
        icon={<IconSearch />}
        placeholder="Введите название курса"
        rightSection={
          <Button onClick={showValueInput} className={style.btn}>Поиск</Button>
        }
      />
    </div>
  );
}

export default Search;