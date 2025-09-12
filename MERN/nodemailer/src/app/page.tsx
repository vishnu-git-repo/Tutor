"use client"
import Image from "next/image";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Home() {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async() => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Email sent successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
      alert("Email not sent");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-[100vh]">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border-1 border-gray-500 p-4 text-xl rounded-md w-[300px] md:w-[500px] lg:w-[700px]"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-1 border-gray-500 p-4 text-xl rounded-md w-[300px] md:w-[500px] lg:w-[700px]"
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="border-1 border-gray-500 p-4 text-xl rounded-md w-[300px] md:w-[500px] lg:w-[700px]"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border-1 border-gray-500 p-4 text-xl rounded-md w-[300px] md:w-[500px] lg:w-[700px]"
          rows={8}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-4 text-xl rounded-md cursor-pointer w-[300px] md:w-[500px] lg:w-[700px] active:scale-99 transition-all duration-300"
          onClick={handleSubmit}
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
