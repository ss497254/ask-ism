import React, { useState } from "react";
// import { Router } from "react-router-dom";
import { Button } from "../ui/components/Button";

function ConfirmAccount() {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {};
    return (
        <div className="min-h-screen bg-indigo-200 dark:bg-indigo-500 flex items-center justify-center relative">
            <div className="my-6 p-6 lg:p-8 lg:w-[700px] md:w-[500px] w-[400px] bg-white dark:bg-slate-800 rounded-lg mx-4">
                <h3 className="dark:text-white mb-5 lg:-mt-4 text-center">
                    Confirm account
                </h3>
                <div className="flex flex-col lg:grid gap-4 mb-2 lg:grid-cols-2">
                    <div>
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            First name
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5 focus:outline-2 focus:outline-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:outline"
                            placeholder="John"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Last name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5 focus:outline-2 focus:outline-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:outline"
                            placeholder="Doe"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="branch"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Branch
                        </label>
                        {/* <select>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select> */}
                        <input
                            type="text"
                            id="branch"
                            className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5 focus:outline-2 focus:outline-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:outline"
                            placeholder="Flowbite"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="website"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Avatar URL
                        </label>
                        <input
                            type="url"
                            id="website"
                            className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5 focus:outline-2 focus:outline-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:outline"
                            placeholder="www.xyz.com"
                            required
                        />
                        <p className="text-sm dark:text-white p-1">
                            You can upload it later.
                        </p>
                    </div>
                </div>
                <div className="mb-4 relative">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                    >
                        Enter password
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
                            className="w-[16px] h-[16px] bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required
                        />
                    </div>
                    <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                        I agree to follow{" "}
                        <a
                            href="/community-guidelines"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            community guidelines
                        </a>
                        .
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
            </div>
        </div>
    );
}

export default ConfirmAccount;
