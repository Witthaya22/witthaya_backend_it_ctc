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
import { uploadImages } from "./middleware/upload";
import {
  getActivityDetails,
  upsertActivityDetails,
  reviewActivityDetails,
  getAllActivityDetailsForReview,
  updateActivityStatus
} from "./controllers/activityDetails"
import cancelActivity from "./controllers/cancelActivity"
// import { updateActivityStatus } from "./controllers/updateActivityStatus"
import getActivityResult from "./controllers/getActivityResult"
import { getAllRequests, createRequest, updateRequest } from "./controllers/admin_requests.post"
import checkInActivity from "./controllers/check-in.post"
import {
  getAllSemesters,
  getActiveSemester,
  createSemester,
  updateSemester,
  deleteSemester
} from "./controllers/semester";

// import { handleUploadImage, uploadProof, getProof } from "./controllers/activity-image";
import activityImage from "./controllers/activity-image";

const router = Router()

// Auth routes
router.get('/auth', checkAuth)
router.post("/signup", signUp)
router.post("/login", login)
router.get("/logout", logout)
router.get("/admin", checkAdmin)
router.post("/admin/login", loginAdmin)

// User routes
router.get('/user/:id', getUsers)
router.put('/user/:UserID', updateUser)
router.delete('/user/:UserID/image', deleteUserImage)
router.get('/users', getAllUsers)
router.get('/user/:id', getUser)
router.get('/user/:id', getUserDetails)
router.delete('/user/:id', deleteUser)
router.post('/admin/user', upsertUser)

// Department routes
router.get('/departments', getDepartments)

// Activity routes
router.get('/activity', getAllActivity)
router.put('/activity-check-status/:activityId/:userId', updateActivityStatus) // เปลี่ยนเส้นทาง
router.get('/activity/participants/:id', getActivityParticipants)
router.post('/admin/activity', uploadImages, upsertActivity)
router.post("/activity/reserve", reserveActivity)
router.post("/activity/check-in", handleActivityCheckIn)
router.get("/activity/booked-activities/:userID", getBookedActivities)
router.post("/activity/cancel", cancelActivity)
router.delete('/activity/:id', deleteActivity)
router.get('/getActivityResult', getActivityResult)
router.post('/activity/check-in2activity', checkInActivity)

// Activity Details routes
router.get('/activity-details', getAllActivityDetailsForReview)
router.get('/activity-details/:activityId/:userId', getActivityDetails)
router.post('/activity-details/:activityId/:userId', upsertActivityDetails)
router.put('/activity-details/:detailId/review', reviewActivityDetails)


router.get('/admin-requests', getAllRequests)
router.post('/admin-requests', createRequest)
router.put('/admin-requests/:id', updateRequest)



router.get("/semesters", getAllSemesters);
router.get("/semester/active", getActiveSemester);
router.post("/semester",  createSemester);
router.put("/semester/:id",  updateSemester);
router.delete("/semester/:id",  deleteSemester);

// Add to your router
router.post("/activity-details/proof", activityImage.handleUploadImage, activityImage.uploadProof);
router.get("/activity-details/proof/:activityId/:userId", activityImage.getProof);

// ต้องอยู่หลังสุดเพราะมี dynamic route
router.get('/activity/:id', getActivity)

export default router

