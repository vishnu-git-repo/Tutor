"use client";

import { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Home() {
  const [amount, setAmount] = useState<number>(0);
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createOrder = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/create-order", {
        method: "POST",
        body: JSON.stringify({ amount }),
      });
      const data = await response.json();
      console.log("Order data >>>>>", data);
      setOrder(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayNow = async (e: React.FormEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    
    try {
      if (!order) {
        await createOrder();
        return;
      }

      // Check if Razorpay is loaded
      if (typeof window.Razorpay === 'undefined') {
        setError("Razorpay is not loaded. Please refresh the page and try again.");
        setIsLoading(false);
        return;
      }

      const orderId = order?.id;
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: parseFloat(amount.toString()) * 100,
        currency: "INR",
        name: 'name',
        description: 'description',
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          console.log("Payment successful >>>>>", data);
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9876543210"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error: any) {
      console.error("Payment error:", error);
      setError(error.message || "Payment failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="border-1 border-gray-500">
        <h1 className="text-3xl font-bold">Razor Pay</h1>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="flex gap-2 justify-center items-center min-h-[80vh]">
        <input
          type="text"
          placeholder="Enter amount"
          className="border-1 border-gray-500 p-2 rounded-md"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button 
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" 
          onClick={handlePayNow}
          disabled={isLoading}
          >
          {isLoading ? "Loading..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}
