import { Box, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    width: '100%'
  })

const Banner = ({movies}) => {                                                 //desturucturing of object

    return (
        <Box style= {{width: '65%'}}>
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
                        <StyledBanner src = {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner"/>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Banner;