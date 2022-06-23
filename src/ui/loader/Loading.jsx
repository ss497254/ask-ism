import React from "react";

export default function Loading() {
    return (
        <div id="loading-body" className="dark:bg-dark-900">
            <div className="loader">
                <div className="loader__dot"></div>
                <div className="loader__dot"></div>
                <div className="loader__dot"></div>
                <div className="loader__dot"></div>
            </div>
        </div>
    );
}
