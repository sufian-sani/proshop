import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";
// import product from "../../frontend/src/components/Product.jsx";

const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;
    if (orderItems && orderItems === 0) {
        return res.status(400)
        throw new Error('No order item');
    } else {
        const order = new Order({
            orderItems: orderItems.map((x) => ({
                ...x,
                product: x._id,
                _id: undefined
            })),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })
        const createdOrder = await order.save();
        res.status(201).json(createdOrder)
    }
})

const getMyOrders = asyncHandler(async (req, res) => {
   const orders = await Order.find({user: req.user._id});
   res.status(200).json(orders)
})

const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate("user", 'name email')
    if(order){
        res.status(200).json(order)
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
})

const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('update Order To Paid')
})

const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('update Order To Delivered')
})

const getOrders = asyncHandler(async (req, res) => {
    res.send('get all Orders')
})

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
};