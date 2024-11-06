import { Router } from "express";
import * as rh  from "./requsethandler.js"

const router=Router()
router.route("/adddonors").post(rh.addDonors);
router.route("/getdonors").get(rh.getDonors);
router.route("/getdonor/:_id").get(rh.getDonor)
router.route("/updatedonor/:_id").put(rh.updateDonor)
router.route("/deletedonor/:_id").delete(rh.deleteDonor)

export default router;