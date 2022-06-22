import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/components/Button";

function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {};
    return (
        <div className="min-h-screen bg-indigo-200 dark:bg-indigo-500 flex items-center justify-center relative">
            <div className="p-6 lg:p-8 md:w-[450px] w-[400px] bg-white dark:bg-slate-800 rounded-lg mx-4">
                <h3 className="dark:text-white mb-4">Change Password</h3>
                <div className="mb-4 relative">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                    >
                        Enter new password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        autoComplete="off"
                        className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5 focus:outline-2 focus:outline-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:outline"
                        placeholder="password"
                        required
                    />
                    <div
                        className="absolute right-2 bottom-2 bg-gray-300 h-5 w-5 rounded text-black dark:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                    ></div>
                </div>
                <div className="mb-4 relative">
                    <label
                        htmlFor="new-password"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                    >
                        Confirm password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="new-password"
                        autoComplete="off"
                        className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5 focus:outline-2 focus:outline-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:outline"
                        placeholder="confirm password"
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
                            to="/login"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
