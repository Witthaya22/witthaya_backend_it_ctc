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
import { getDepartments } from "./controllers/departments"
import reserveActivity from "./controllers/reserveActivity";
import getBookedActivities from "./controllers/getReserveActivity"
import handleActivityCheckIn from "./controllers/qrcodeCheck"
import deleteUser from "./controllers/deleteUser"
import deleteActivity from "./controllers/deleteActivity"
import getUserDetails from "./controllers/getUserDetails"
import getActivityParticipants from "./controllers/getActivityParticipants"
import { getUsers, updateUser, deleteUserImage } from "./controllers/updateUser"


const router = Router()

router.get('/user/:id', getUsers)
router.put('/user/:UserID', updateUser)
router.delete('/user/:UserID/image', deleteUserImage)

router.get('/departments', getDepartments)

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
router.delete('/user/:id', deleteUser)


router.post('/admin/user', upsertUser)
router.get('/user/:id', getUserDetails)
router.post('/admin/activity', upsertActivity)

router.use('/admin', onlyAdmin)

router.post("/activity/reserve", reserveActivity)
router.get("/activity/booked-activities/:userID", getBookedActivities);
router.post("/activity/check-in", handleActivityCheckIn);
router.delete('/activity/:id', deleteActivity);
router.get('/activity/participants/:id', getActivityParticipants)

// router.get('/api/user/:id', getUsers)
// router.put('/api/user/:UserID', updateUser)
// router.delete('/api/user/:UserID/image', deleteUserImage)



export default router
