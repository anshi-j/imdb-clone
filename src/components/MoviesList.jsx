import styled from "@emotion/styled";
import { Star } from "@mui/icons-material";
import { Box,List, ListItem, Typography } from "@mui/material";


const Banner = styled('img')({
    width : 47
})

const Container = styled(List)`
    display:flex;
`

const MoviesList = ({movies}) => {
    return (
        <>
            {
                movies.map(movie => (
                    <Container>
                        <ListItem>
                            <Banner src = {`https://imagr.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster"/>
                        </ListItem>
                        <ListItem>
                            <Typography>{movie.original_title}</Typography>
                        </ListItem>
                        <ListItem>
                            <Star color="warning"/>
                            <Typography>{movie.vote_average}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>{movie.release_date}</Typography>
                        </ListItem>
                    </Container>
                ))
            }
        </>
    )
}

export default MoviesList;