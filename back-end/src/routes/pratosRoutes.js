import Router from "express-promise-router";
import pratosController from "../controllers/pratosControllers.js";
const router = Router();

router.post('/newPlate', pratosController.createPlate);

router.get('/plates', pratosController.listPlates);

router.get('/plates/:id', pratosController.findPlateById);

router.put('/plates/:id', pratosController.updatePlateById);

router.delete('/plates/:id', pratosController.deletePlateById);

export default router;