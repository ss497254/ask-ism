import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import SearchHistory from "./SearchHistory";
import { SearchOverlay } from "./SearchOverlay";
import { AnsSearchResult, UserSearchResult } from "./SearchResult";

const History = ({ history }) => {
    const historyDeleteClickHandler = (id) => {
        return id;
    };

    return (
        <div className="flex flex-col w-full">
            {history.map((h) => (
                <SearchHistory
                    onClickToDeleteSearchHistory={() =>
                        historyDeleteClickHandler(h.id)
                    }
                    key={h.id}
                    searchText={h.term}
                />
            ))}
        </div>
    );
};

const SearchResult = ({ items }) => {
    return (
        <div className="flex flex-col w-full">
            {items.map((userOrAns, i) =>
                "name" in userOrAns ? (
                    <AnsSearchResult key={i} room={userOrAns} />
                ) : (
                    <UserSearchResult key={i} user={userOrAns} />
                )
            )}
        </div>
    );
};

export const GlobalSearch = ({ history, searchResults }) => {
    const [focused, setFocused] = useState(false);
    const [term, setTerm] = useState("");

    const setSearchTerm = ({ currentTarget: { value } }) => setTerm(value);
    const focusHandler = () => setFocused(true);
    const blurHandler = () => setFocused(false);

    return (
        <div className="flex w-full relative">
            <div className="flex relative z-10 w-full p-2">
                <SearchBar
                    className="mb-2"
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    onChange={setSearchTerm}
                />
            </div>
            {focused && (
                <SearchOverlay className="absolute z-0">
                    <div className="flex flex-col w-full">
                        {!term && history && <History history={history} />}
                        {term && searchResults && (
                            <SearchResult items={searchResults} />
                        )}
                    </div>
                </SearchOverlay>
            )}
        </div>
    );
};
