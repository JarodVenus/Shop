import React, { useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

const CategoryBar = ({ categories, onAddCategories }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    const handleAddCategory = (selectedCategory) => {
       onAddCategories(selectedCategory);
    }


  return (
    <div className='cat-bar'>
        <div className='cat-items'>         
                {matches ? (
                    <>
                        <p>Catégories :</p>
                        <div className='categories'>
                            {categories.map((category) => (
                                <div key={category.id} className='category'>
                                    <span onClick={ () => handleAddCategory(category.slug) } >{category.name}</span>
                                </div>
                            ))}
                        </div>
                    </>
                ):(
                    <>
                        <span>Categories</span>
                    </>
                )}
                
        </div>
    </div>
  )
}

export default CategoryBar