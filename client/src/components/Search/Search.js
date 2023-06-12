import React from 'react';
import { Input, Button } from '@mantine/core';
import style from './style.module.css';
import { IconSearch } from '@tabler/icons-react';

function Search() {
  return (
    <div className={style['wrapper']}>
      <Input
        className={style.inp}
        size="md"
        icon={<IconSearch />}
        placeholder="Введите название курса"
        rightSection={
          <Button className={style.btn}>Поиск</Button>
        }
      />
    </div>
  );
}

export default Search;