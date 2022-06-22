import React, { useState } from "react";

export const Banner = () => {
    const [bannerOpen, setBannerOpen] = useState(false);

    return (
        <>
            {bannerOpen && (
                <div className="fixed bottom-6.5 right-0 w-full md:bottom-6 md:left-1/3 md:right-1/3 md:w-auto z-60">
                    <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between mt-0.5">
                        <div>
                            👉{" "}
                            <a
                                className="hover:underline"
                                href="https://github.com/ss497254"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View this on my Github
                            </a>
                        </div>
                        <button
                            className="text-slate-500 hover:text-slate-400 ml-5"
                            onClick={() => setBannerOpen(false)}
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-4 h-4 shrink-0 fill-current"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
