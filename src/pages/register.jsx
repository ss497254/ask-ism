import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../ui/Input";
import { Button } from "../ui/components/Button";

function ForgetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {};
    return (
        <div className="min-h-screen bg-indigo-200 dark:bg-indigo-500 flex items-center justify-center relative">
            <div className="p-6 lg:p-8 md:w-[480px] w-[400px] bg-white dark:bg-slate-800 rounded-lg mx-4">
                <h3 className="dark:text-white">Create account</h3>
                <Input
                    label="Your email"
                    placeholder="Email"
                    type="email"
                    className="my-4"
                />
                <Button
                    className="bg-blue-600 text-base"
                    color="custom"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Register
                </Button>
                <div className="w-full flex flex-row justify-between mt-4">
                    <p className="inline">
                        <Link
                            className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                            to="/login"
                        >
                            Login
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
