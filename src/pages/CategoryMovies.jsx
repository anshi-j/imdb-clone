import { useState, useEffect } from "react"
import { Box, styled } from "@mui/material"
import Header from "../components/common/Header"
import { categoryMovies } from "../services/api"
import { useLocation } from "react-router-dom"
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL } from "../constants/constant"

import Carousel from "react-multi-carousel"


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const StyledBanner = styled('img')({
    height: 450,
    width: '100%'
  })

const CategoryMovies = () => {
    const [movies,setMovies] = useState([]);
    const { search } = useLocation();

    // useEffect(() => {
    //     const getData= async(API_URL) => {
    //         let response = await categoryMovies(API_URL);
    //         setMovies(response.results);
    //     }
    //     let API_URL;

    //     if (search.includes('popular')){
    //        API_URL = POPULAR_API_URL;
    //     } else if (search.includes('upcoming')){
    //        API_URL = UPCOMING_API_URL;
    //     } else if (search.includes('toprated')){
    //        API_URL = TOPRATED_API_URL;
    //     }
    //     getData();
    // },[search])
    return (
        <>
            <Header />
            <Box>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    slidesToSlide={1}
                    responsive={responsive}
                >
                    {
                        movies.map(movie => (
                            <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner" />
                        ))
                    }
                </Carousel>
            </Box>
        </>
    )
}

export default CategoryMovies;