import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        // categories.push(newCategory);
        // console.log(newCategory);
        // setCategories([...categories, 'Prueba']);
        setCategories((cat) => [newCategory ,...categories ]);
    };

    //   console.log(categories);

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
                currentCategories={categories}
            // setCategories = {setCategories}
            ></AddCategory>

            {/* Listado de Gif */}

            {/* <button onClick = {onAddCategory}>Agregar</button> */}


            {categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category} />
            ))}


            {/* Gif Item */}
        </>
    );
};
