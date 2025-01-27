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
  getAllActivityDetailsForReview
} from "./controllers/activityDetails"
import cancelActivity from "./controllers/cancelActivity"
import { updateActivityStatus } from "./controllers/updateActivityStatus"
import getActivityResult from "./controllers/getActivityResult"
import { getAllRequests, createRequest, updateRequest } from "./controllers/admin_requests.post"
import checkInActivity from "./controllers/check-in.post"

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
router.post('/activity/check-in', checkInActivity)

// Activity Details routes
router.get('/activity-details', getAllActivityDetailsForReview)
router.get('/activity-details/:activityId/:userId', getActivityDetails)
router.post('/activity-details/:activityId/:userId', upsertActivityDetails)
router.put('/activity-details/:detailId/review', reviewActivityDetails)


router.get('/admin-requests', getAllRequests)
router.post('/admin-requests', createRequest)
router.put('/admin-requests/:id', updateRequest)


// ต้องอยู่หลังสุดเพราะมี dynamic route
router.get('/activity/:id', getActivity)

export default router

// // เส้นทางการตรวจสอบสิทธิ์
// router.get('/auth', checkAuth);
// router.post("/signup", signUp);
// router.post("/login", login);
// router.get("/logout", logout);
// router.get("/admin", checkAdmin);
// router.post("/admin/login", loginAdmin);

// // เส้นทางผู้ใช้
// router.get('/users', getAllUsers);
// router.get('/user/:id', getUserDetails);
// router.put('/user/:UserID', updateUser);
// router.delete('/user/:UserID/image', deleteUserImage);
// router.delete('/user/:id', deleteUser);
// router.post('/admin/user', upsertUser);

// // เส้นทางแผนก
// router.get('/departments', getDepartments);

// // เส้นทางกิจกรรม
// router.get('/activity', getAllActivity);
// router.get('/activity/:id', getActivity);
// router.post('/admin/activity', upsertActivity);
// router.post("/activity/reserve", reserveActivity);
// router.get("/activity/booked-activities/:userID", getBookedActivities);
// router.post("/activity/check-in", handleActivityCheckIn);
// router.delete('/activity/:id', deleteActivity);
// router.get('/activity/participants/:id', getActivityParticipants);

// // เส้นทางรายละเอียดกิจกรรม
// router.get('/activity-details/:activityId/:userId', getActivityDetails);
// router.post('/activity-details/:activityId/:userId', upsertActivityDetails);
// router.put('/activity-details/:detailId/review', reviewActivityDetails);
// router.get('/activity-details', getAllActivityDetailsForReview);

// export default router;
