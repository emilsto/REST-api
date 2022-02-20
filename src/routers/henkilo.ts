import express from "express";
import controller from "../controllers/henkilo"

const router = express.Router();

//routes for updating henkilo database
router.get("/get", controller.getAllHenkilo);
router.post("/create", controller.createHenkilo);
router.get("/get/:id",controller.getHenkilo);
router.delete("/delete/:id", controller.deleteHenkilo);
router.put("/update/:id", controller.updateHenkilo);

export = router;