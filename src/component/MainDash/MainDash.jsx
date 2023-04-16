import React from 'react'
import './MainDash.css'
import Table  from '../Table/Table';

import Cards from '../Cards/Cards'
const MainDash = () => {
    return (
        <div>
            <h1 className='h1'>Dashboard</h1>
            <Cards />
            <Table/>


        </div>
    )
}

export default MainDash