import React, { useEffect, useState } from "react";
import { SearchBar } from "../../ui/Search/SearchBar";
import { SearchOverlay } from "../../ui/Search/SearchOverlay";
import { useRouter } from "react-router-dom";
import { debounce } from "lodash";
import { InfoText } from "../../ui/components/InfoText";
import {
    AnsSearchResult,
    UserSearchResult,
} from "../../ui/Search/SearchResult";
import useWindowSize from "../../shared-hooks/useWindowSize";
import usePageVisibility from "../../shared-hooks/usePageVisibility";
import { useConn } from "../../shared-hooks/useConn";

export const SearchBarController = ({}) => {
    const { user } = useConn();
    const [rawText, setText] = useState("");
    const visible = usePageVisibility();
    const text = "asdf";
    const isOverflowing = useWindowSize().width < 800;
    let enabled = false;
    const isUsernameSearch = text.startsWith("@");

    if (text && isUsernameSearch && text.trim().length > 2) {
        enabled = true;
    }
    if (text && !isUsernameSearch && text.trim().length > 1) {
        enabled = true;
    }

    // const { data, isLoading } = useQuery(["search", text], {
    //     enabled,
    // });

    const data = null,
        isLoading = false;
    const results = [];

    return (
        <div className="relative w-full z-10 flex flex-col px-2">
            <SearchBar
                placeholder={
                    isOverflowing
                        ? "Search"
                        : "Search for questions, answers or spaces"
                }
                onChange={(e) => {
                    setText(e.target.value);
                }}
                isLoading={!!rawText}
            />
            {!!rawText ? (
                <SearchOverlay
                // {...getRootProps(
                //     { refKey: "ref" },
                //     { suppressRefError: true }
                // )}
                >
                    <ul
                        className="w-full px-2 mb-2 mt-7 rounded-b-8 overflow-y-auto"
                        // {...getMenuProps({ style: { top: 0 } })}
                    >
                        {data ? (
                            <InfoText className="p-3">no results</InfoText>
                        ) : (
                            <>
                                <UserSearchResult user={user} />
                                <AnsSearchResult room={{ name: "lelo" }} />
                            </>
                        )}
                    </ul>
                </SearchOverlay>
            ) : null}
        </div>
    );
};
