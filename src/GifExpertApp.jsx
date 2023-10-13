import { useState } from 'react'
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ()=>{

    const [categoria, setCategoria] = useState(['Vegeta'])

     const onAddCategory = ( newCategory ) => {

        if ( categoria.includes(newCategory)) return;

         setCategoria([...categoria, newCategory])
        //  setCategoria(cats => [...cats,'HunterXHunter'] )
        }

    return (
        <>
            <h1>Encuentra los mejores Gifs del mundo</h1>

            <AddCategory 
                onNewCategory = {event => onAddCategory(event)}
            />
            {
                categoria.map( category =>(
                    <GifGrid 
                        key = {category}
                        category={category} />
                        
                ))
            }
       
        </>
    )

}