import React, { useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

const CategoryBar = ({ categories }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    const [ categoriesFiltered, setCategoriesFiltered ] = useState([]);

    const addCategory = (selectedCategory) => {
       const categoriesClone = [...categoriesFiltered];
       categoriesClone.push(selectedCategory);
       setCategoriesFiltered(categoriesClone);
    }


  return (
    <div className='cat-bar'>
        <div className='cat-items'>         
            <p>Catégories :</p>
            <div className='categories'>
                {categories.map((category) => (
                    <div key={category.id} className='category'>
                        <span >{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CategoryBar