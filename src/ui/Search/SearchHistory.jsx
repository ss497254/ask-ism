import React from "react";

import { SolidSearch } from "../../icons";

const SearchHistory = ({ onClickToDeleteSearchHistory, searchText }) => {
    return (
        <div className={"flex flex-row py-2 px-4 w-full"}>
            <div className={"flex flex-1 items-center group cursor-pointer"}>
                <SolidSearch
                    className={
                        "mr-4 group-hover:text-primary-100 text-primary-300"
                    }
                />
                <span
                    className={"text-primary-300 group-hover:text-primary-100"}
                >
                    {searchText}
                </span>
            </div>
            <span
                onClick={onClickToDeleteSearchHistory}
                className={"text-accent underline cursor-pointer"}
            >
                Delete
            </span>
        </div>
    );
};

export default SearchHistory;
