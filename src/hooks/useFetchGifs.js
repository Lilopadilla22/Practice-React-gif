
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGif';


export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const getImages= async () => {
        const newImagenes = await getGifs(category)
        setImages(newImagenes)
        setIsLoading(false)
    }

    useEffect(() => {

        getImages()

        // getGifs(category)
        //   .then(newImages => setImages(newImages))

    }, [])
  
  
  
    return {
        images,
        isLoading
    }
}
