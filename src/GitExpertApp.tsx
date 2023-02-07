import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => { 

  const [categories, setCategories] = useState(['Dragon Ball', 'Inuyasha'])

  const onAddCategory = ( newCategory: string) => {

    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory])


    // setCategories([...categories, 'one pice'])
    // setCategories.push('one pice'); NO UTIL
    // setCategories (cat => [...cat, 'one piece'])
  }

    return (
    <>
        <h1> GitExpertApp </h1>

        <AddCategory 
          // setCategories = {setCategories}
          onNewCategory = {(value: any) => onAddCategory(value)}
        />
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        <ol>
          {
            categories.map( (category)=> {
              return (
                <GifGrid key={category} category={category}/>
                // <div key= {category}>
                //   <li>{category}</li>
                // </div>
              )
            })
          }
        </ol>
    </>
  )
}
