import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../customer/components/Navigation/Navigation";
import Footer from "../../../customer/components/Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous error
        setError("");

        // Prepare the data to send to the API
        const loginData = {
            email,
            password,
        };

        try {
            const response = await fetch("https://e-commerce-backend-springboot.onrender.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            // Check if the login was successful
            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);
                toast.success("Login successful!");

                // Store token and user in localStorage
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user)); // Store user details

                const redirectPath =
                    data.role === "ADMIN" ? "/admin_dashboard" : "/";
                setTimeout(() => navigate(redirectPath), 2000);
            } else {
                const data = await response.json();
                toast.error(data.error || "Login failed");
            }
        } catch (error) {
            toast.error("Login error. Please try again!");
        }
    };

    return (
        <>
            <Navigation />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm/6 font-medium text-gray-900 text-left"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="/login"
                                        className="font-semibold text-primary hover:text-secondary"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="mt-2 text-center text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{" "}
                        <a
                            href="/register"
                            className="font-semibold text-primary hover:text-secondary"
                        >
                            Register Here
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}