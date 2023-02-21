import express from "express";
import { signin, signup,getOne,putOnce,signup2} from "../controllers/user.js";
import multer from "../middlewares/multer-config.js";
const router = express.Router();
router
  .route("/signup2")
  .post(multer("Image", 512 * 1024) , signup2);
  router
  .route("/signup").post( signup);
router.route("/signin")
.post(signin);
router
.route('/getOne').post(getOne);
router
  .route('/putOnce').put(putOnce);
export default router;