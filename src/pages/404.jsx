import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div class="w-full min-h-screen grid items-center">
            <div class="px-4 max-w-screen-sm text-center -mt-15">
                <h1 class="mb-4 text-7xl font-extrabold lg:text-9xl text-blue-600 dark:text-blue-500">
                    404
                </h1>
                <p class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                    Something's missing.
                </p>
                <p class="mb-4 text-lg font-light text-gray-600 dark:text-gray-400">
                    Sorry, we can't find that page. You'll find lots to explore
                    on the home page.
                </p>
                <Link
                    to="/"
                    class="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
                >
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
}
