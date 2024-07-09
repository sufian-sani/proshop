import {apiSlice} from './apiSlice'
import { ORDERS_URL } from '../constants'
import {createSlice} from "@reduxjs/toolkit";

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
           query:(order) => ({
               url: ORDERS_URL,
               method: "POST",
               body: { ...order },
           })
        }),
        getOrderDetails: builder.query({
            query: (orderId) => ({
                url: `${ORDERS_URL}/${orderId}`
            }),
            keepUnusedDataFor: 5
        }),
        payOrder: builder.mutation({
            query: ({ orderId, details }) => ({
                url: `${ORDERS_URL}/${orderId}/pay`,
                method: "PUT",
                body: { ...details },
            })
        })
    }),
})

export const { useCreateOrderMutation, useGetOrderDetailsQuery, usePayOrderMutation } = ordersApiSlice