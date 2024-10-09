import { Router } from "express";
import * as rh  from "./requestHandler.js"
const router=Router()

router.route("/addEmployees").post(rh.addEmployee);
router.route("/getEmployee").get(rh.getEmployee);
router.route("/getemploy/:_id").get(rh.getEmploy);
router.route("/editemployee/:_id").get(rh.editEmployee);
router.route("/updateemployee/:_id").put(rh.updateEmployee);
router.route("/deleteemployee/:_id").delete(rh.deleteEmployee);
router.route("/useremployee").post(rh.UserEmployee)
// router.route("/signin").post(rh.signIn)



export default router;