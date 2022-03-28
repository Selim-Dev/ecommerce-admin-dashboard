import React from 'react';
import './List.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTabel from '../../components/dataTable/DataTabel';
import DataTabelCategory from '../../components/catogery/dataTabelCategory/DataTabelCategory';

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        {/* <DataTabel /> */}
        <DataTabelCategory />
      </div>
    </div>
  );
};

export default List;
