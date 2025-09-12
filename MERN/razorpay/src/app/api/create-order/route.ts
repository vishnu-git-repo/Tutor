import { NextResponse, NextRequest } from "next/server";
import Razorpay from "razorpay";

// Debug: Log environment variables
// console.log("Environment variables check:");
// console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
// console.log("RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET ? "***EXISTS***" : "***MISSING***");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(request: NextRequest) {
    try {
        const { amount } = await request.json();
        
        if (!amount || amount <= 0) {
            return NextResponse.json(
                { error: "Invalid amount provided" }, 
                { status: 400 }
            );
        }

        const order = await razorpay.orders.create({
            amount: Math.round(amount * 100), // Convert to paise and ensure it's an integer
            currency: "INR",
            receipt: "receipt_" + Date.now(),
            notes: {
                key1: "value1",
            }
        });

        return NextResponse.json(order, { status: 200 });
    } catch (error: any) {
        console.log("Error in creating order >>>>>", error);
        return NextResponse.json(
            { error: error.message || "Failed to create order" }, 
            { status: 500 }
        );
    }
}
