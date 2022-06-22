import React from "react";
import { SolidCaretRight } from "../../../icons";
import { SearchBar } from "../../Search/SearchBar";

export const SearchHeader = ({
    onBackClick,
    onSearchChange,
    searchPlaceholder,
    searchLoading,
}) => {
    return (
        <div
            className="flex w-full px-4 gap-1 bg-primary-900 text-primary-100"
            style={{ paddingTop: 17, paddingBottom: 17 }}
        >
            {onBackClick && (
                <button onClick={onBackClick} style={{ width: 30 }}>
                    <SolidCaretRight
                        className="m-auto transform -rotate-180"
                        height={20}
                        width={20}
                    />
                </button>
            )}
            <SearchBar
                mobile={true}
                placeholder={searchPlaceholder}
                onChange={onSearchChange}
                isLoading={searchLoading}
            />
        </div>
    );
};
