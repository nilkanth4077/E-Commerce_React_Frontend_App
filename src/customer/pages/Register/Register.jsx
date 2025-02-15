import Navigation from "../../../customer/components/Navigation/Navigation";
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
            const response = await fetch("http://localhost:8080/auth/signup", {
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
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="w-full">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign up your account
                    </h2>
                </div>

                <div className="mt-10 w-full">
                    <form
                        onSubmit={handleSubmit}
                        action="#"
                        method="POST"
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm/6 font-medium text-gray-900 text-left"
                                >
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        autoComplete="name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm/6 font-medium text-gray-900 text-left"
                                >
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        autoComplete="name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

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
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium text-gray-900 text-left"
                                >
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        autoComplete="password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="mobile"
                                    className="block text-sm/6 font-medium text-gray-900 text-left"
                                >
                                    Mobile No
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="tel"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already a member?{" "}
                        <a
                            href="/login"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Login Here
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}