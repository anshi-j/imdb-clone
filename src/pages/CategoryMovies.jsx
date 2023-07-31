import { useState, useEffect } from "react"
import { Box, Typography, styled, Divider } from "@mui/material"
import Header from "../components/common/Header"
import MoviesList from "../components/MoviesList"
import { categoryMovies } from "../services/api"
import { useLocation } from "react-router-dom"
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL, moviesType } from "../constants/constant"

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

const Component = styled(Box)`
    width:80%;
    margin: auto;
`
const Container = styled(Box)`
    background:#F5F5F5;
    padding: 10px;
`

const CategoryMovies = () => {
    const [movies, setMovies] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const getData = async (API_URL) => {
            let response = await categoryMovies(API_URL);
            const results = response.results;
            setMovies(results);
        }
        let API_URL;

        if (search.includes('popular')) {
            API_URL = POPULAR_API_URL;
        } else if (search.includes('upcoming')) {
            API_URL = UPCOMING_API_URL;
        } else if (search.includes('toprated')) {
            API_URL = TOPRATED_API_URL;
        }
        getData(API_URL);
    }, [search])
    return (
        <>
            <Header />
            <Component>
                <Carousel
                    swipeable={false}
                    draggable={false}
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
                <Container>
                    <Typography variant="h6">IMDb Charts</Typography>
                    <Typography variant="h4">IMDb {moviesType[search.split('=')[1]]} Movies</Typography>
                    <Typography style={{ fontsize : 12, margin : 5}}>IMDb Top {movies.length} as rated by regular IMDb voters.</Typography>
                    <Divider/>
                    <MoviesList movies={movies}/>
                </Container>
            </Component>
        </>
    )
}

export default CategoryMovies;