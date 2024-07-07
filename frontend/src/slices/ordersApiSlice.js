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
            query: (order) => ({
                url: `{ORDERS_URL}/${order.id}`,
            }),
            keepUnusedDataFor: 5
        })
    }),
})

export const { useCreateOrderMutation, useGetOrderDetailsQuery } = ordersApiSlice