import filesystem from "../utilits/read_and_write.js"

let movies = filesystem.read("movies")

const GET = (req, res) => {
    res.send(movies)
}
const GET_GENRE = (req, res) => {

    const { genre }  = req.query

    let movie = movies.filter(m => m.genre.includes(genre))

    
    return res.send(movie)
    

    return res.status(404).json({
        status : 404,
        message : "Not Found"
    })
}

const GET_TITLE = (req, res) => {

    const { title }  = req.query

    let movie = movies.filter(m => m.title.includes(title))

    if(movie) {
        return res.send(movie)
    }

    return res.status(404).json({
        status : 404,
        message : "Not Found"
    })
}

const SORT_YEAR = (req, res) => {

    for(let i = 0; i < movies.length ; i++){
        let temp = 0;
        for (let j = i+1; j < movies.length; j++){
            if(movies[i].year > movies[j].year){
                temp =  movies[j]
                movies[j] = movies[i]
                movies[i] = temp
            }
        }
    }

    return res.send(movies)
}

const SORT_RATING = (req, res) => {

    for(let i = 0; i < movies.length ; i++){
        let temp = 0;
        for (let j = i+1; j < movies.length; j++){
            if(movies[i].rating > movies[j].rating){
                temp =  movies[j]
                movies[j] = movies[i]
                movies[i] = temp
            }
        }
    }

    return res.send(movies)
}

export default {
    GET,
    GET_GENRE,
    GET_TITLE,
    SORT_YEAR,
    SORT_RATING
}
