import Navigation from "../../../customer/components/Navigation/Navigation";
import Footer from "../../../customer/components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://e-commerce-backend-springboot.onrender.com/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                console.log("Registration successful!");
                toast.success("Registration successful!");
                setTimeout(() => navigate("/login"), 2000);
            } else {
                const data = await response.json();
                toast.error(data.error || "Registration failed");
            }
        } catch (error) {
            toast.error("Registration error. Please try again!");
        }
    };

    return (
        <>
            <Navigation />
            <div className="flex items-center justify-center px-4 lg:px-8 py-4">
                <div className="w-full max-w-3xl bg-white p-6 drop-shadow rounded-md">
                    <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                        Sign up your account
                    </h2>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm/6"
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm/6"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm/6"
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                Mobile No
                            </label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm/6"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-primary px-4 py-2 text-white font-semibold shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 sm:text-sm"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already a member?{" "}
                        <a href="/login" className="font-semibold text-primary hover:text-secondary">
                            Login Here
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}