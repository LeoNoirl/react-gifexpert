// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    console.log({images, isLoading});

    // const [images, setImages] = useState([])

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     /* Primera opcion */
    //     // getGifs(category).then((newImages) => setImages(newImages) );
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    //* 1er metodo *//

                    // images.map((e) => (
                    //     <li key={e.id}>{e.title}</li>
                    // ))

                    //* 2do metodo *//

                    // images.map((image) => (
                    //     <GifItem
                    //         key={image.id}
                    //         title={image.title}
                    //         url={image.url}
                    //     />
                    // ))

                    //* 3er metodo *//

                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {... image}
                        />
                    ))
                }
            </div>
        </>
    )
}
