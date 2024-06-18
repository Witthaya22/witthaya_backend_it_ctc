import { Router } from "express"
import signUp from "./controllers/signUp"
import login from "./controllers/login"
import checkAuth from "./controllers/checkAuth"

const router = Router()

router.get('/auth',checkAuth)
router.post("/signup", signUp)
router.post("/login", login)


export default router
