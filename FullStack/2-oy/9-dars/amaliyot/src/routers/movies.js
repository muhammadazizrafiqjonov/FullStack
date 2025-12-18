import experess from "express"
import movieControllers from "../controllers/movies.js"

const router = experess.Router()

router
    .get("/all", movieControllers.GET)
    .get("/genre" , movieControllers.GET_GENRE)
    .get("/title", movieControllers.GET_TITLE)
    .get("/year", movieControllers.SORT_YEAR)
    .get("/rating", movieControllers.SORT_RATING)

export default router