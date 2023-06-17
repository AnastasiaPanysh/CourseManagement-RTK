import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Pagination } from '@mantine/core';
import style from './style.module.css';
import { useGetCourseQuery } from '../../services/course';
import Item from './Item';

function Content({ searchString }) {
  const { data: dataAll } = useGetCourseQuery();
  console.log(dataAll);
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeRef = useRef(6);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(filterVacancy());
    setCurrentPage(1);
  }, [searchString, dataAll]);



  function filterVacancy() {
    if (!searchString) return dataAll;
    return dataAll.filter(({ name }) => {
      const lowerCaseVacancy = name && name.toLowerCase();
      return !searchString || lowerCaseVacancy.includes(searchString.toLowerCase());
    });
  }

  const paginatedList = useMemo(() => list?.slice((currentPage - 1) * pageSizeRef.current, currentPage * pageSizeRef.current) || [], [list, currentPage]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <>
      <div className={style.flex}>
        {paginatedList.map((el) => (
          <Item key={el.id} name={el.name} description={el.description} location={el.location} />
        ))}
      </div>
      <Pagination
        total={Math.ceil(list?.length / pageSizeRef.current) || 0}
        value={currentPage}
        onChange={handlePageChange}
        position="center"
      />
    </>
  );
}

export default Content;
