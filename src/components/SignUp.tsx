"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Welcome to our newsletter!");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        alert("Email sent successfully!");
        setEmail(""); // Clear input after submission
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="w-full bg-[#F9F9F9] py-12 flex justify-center">
      <div className="w-full max-w-[1273px] bg-white border border-gray-300 p-10 text-center rounded-lg">
        <h1 className="text-4xl font-semibold">Join the club and get the benefits</h1>
        <p className="text-base text-gray-600 mt-4 max-w-[600px] mx-auto">
          Sign up for our newsletter and receive exclusive offers.
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-6 flex justify-center">
          <div className="flex space-x-2 w-full max-w-md">
            <Input 
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="px-6 py-2">Sign up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default SignUp;
