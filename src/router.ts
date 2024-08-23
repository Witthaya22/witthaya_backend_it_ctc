import { Router } from "express"
import signUp from "./controllers/signUp"
import login from "./controllers/login"
import checkAuth from "./controllers/checkAuth"
import logout from "./controllers/logout"
import loginAdmin from "./controllers/loginAdmin"
import checkAdmin from "./controllers/checkAdmin"
import onlyAdmin from "./middleware/onlyAdmin"
import upsertActivity from "./controllers/upsertActivity"
import getAllActivity from "./controllers/getAllActivity"
import getActivity from "./controllers/getActivity"
import getAllUsers from "./controllers/getAllUsers"
import upsertUser from "./controllers/upsertUser"
import getUser from "./controllers/getUser"

const router = Router()

router.get('/auth',checkAuth)
router.post("/signup", signUp)
router.post("/login", login)
router.get("/logout", logout)

router.get("/admin", checkAdmin)
router.post("/admin/login", loginAdmin)

router.get('/activity', getAllActivity)
router.get('/activity/:id', getActivity)

router.get('/users', getAllUsers)
router.get('/user/:id', getUser)


router.post('/admin/user', upsertUser)
router.use('/admin', onlyAdmin)
router.post('/admin/activity', upsertActivity)



export default router
