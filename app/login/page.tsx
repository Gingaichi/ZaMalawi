"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { login} from "./actions";
import { createClient } from "@/utils/supabase/client";

export default function AuthCard() {
  const [showRegister, setShowRegister] = useState(false);
  const supabase = createClient();
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
  
    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }
  
    const { error } = await supabase.auth.signUp({ email, password });
  
    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Check your email for the confirmation link.");
    }
  };
  

  return (
    <div className="flex items-center lg:bg-gradient-to-b from-black to-red-900 justify-center min-h-screen bg-black px-4 text-white">
      <Card className="bg-red-900 text-white border-none shadow-lg w-full max-w-md px-8 py-10">
        <CardContent className="space-y-6">
          <h1 className="text-2xl font-bold text-center">
            {showRegister ? "Register" : "Login"}
          </h1>

          {showRegister ? (
            <form onSubmit={handleRegister} className="flex flex-col space-y-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="p-2 border border-gray-300 text-white rounded-md"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Surname"
                className="p-2 border border-gray-300 text-white rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-2 border border-gray-300 text-white rounded-md"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="p-2 border border-gray-300 text-white rounded-md"
              />
              <button
                type="submit" 
                className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Register
              </button>
              <button
                type="button"
                onClick={() => setShowRegister(false)}
                className="text-sm underline text-white hover:text-blue-200 text-center"
              >
                Already have an account? Login
              </button>
            </form>
          ) : (
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-2 border border-gray-300 text-white rounded-md"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="p-2 border border-gray-300 text-white rounded-md"
              />
              <button
                type="submit" formAction={login}
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setShowRegister(true)}
                className="text-sm underline text-white hover:text-blue-200 text-center"
              >
                Don&apos;t have an account? Register
              </button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
