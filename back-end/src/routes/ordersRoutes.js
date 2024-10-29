import Router from "express-promise-router";
import ordersControllers from "../controllers/ordersController.js";
const router = Router();

router.post('/newOrder', ordersControllers.createOrder);

router.get('/orders', ordersControllers.listOrder);

router.put('/orders/:id', ordersControllers.updateOrderById);

router.get('/orders/:id', ordersControllers.findOrderById);

export default router;