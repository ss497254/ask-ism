import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../ui/Input";
import { Button } from "../ui/components/Button";

function ForgetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {};
    return (
        <div className="min-h-screen bg-indigo-200 dark:bg-indigo-500 flex items-center justify-center relative">
            <div className="p-6 lg:p-8 lg:w-[480px] w-[400px] bg-white dark:bg-slate-800 rounded-lg mx-4">
                <h3 className="dark:text-white">Login to your account</h3>
                <Input
                    label="Your email"
                    placeholder="Email"
                    type="email"
                    className="my-4"
                />
                <div className="mb-4 relative">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        autoComplete="off"
                        className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5 focus:outline-2 focus:outline-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:outline"
                        placeholder="Password"
                        required
                    />
                    <div
                        className="absolute right-2 bottom-2 bg-gray-300 h-5 w-5 rounded text-black dark:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                    ></div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-[16px] h-[16px] border border-gray-300 rounded bg-gray-50 focus:outline-2 focus:outline-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        />
                    </div>
                    <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Remember me
                    </label>
                </div>
                <Button
                    className="bg-blue-600 text-base"
                    color="custom"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
                {/* <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button> */}

                <div className="w-full flex flex-row justify-between mt-4">
                    <p className="inline">
                        <Link
                            className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                            to="/register"
                        >
                            Register
                        </Link>
                    </p>
                    <p className="inline">
                        <Link
                            className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                            to="/forgot-password"
                        >
                            Forgot your password?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
