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

export const SearchBarController = ({}) => {
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

    // const { data, isLoading } = useQuery(["search", text].join("/"), {
    //     enabled,
    // });
    const data = [],
        isLoading = true;
    // const { push } = useRouter();
    const results = [];

    return (
        <div className="relative w-full z-10 flex flex-col">
            <SearchBar
                // {...getInputProps()}
                value={rawText}
                placeholder={
                    isOverflowing
                        ? "Search"
                        : "Search for questions, answers or spaces"
                }
                isLoading={isLoading}
            />
            {false ? (
                <SearchOverlay
                // {...getRootProps(
                //     { refKey: "ref" },
                //     { suppressRefError: true }
                // )}
                >
                    <ul
                        className="w-full px-2 mb-2 mt-7 bg-primary-800 rounded-b-8 overflow-y-auto"
                        // {...getMenuProps({ style: { top: 0 } })}
                    >
                        {data ? (
                            <InfoText className="p-3">no results</InfoText>
                        ) : null}

                        {/* {results.map((item, index) =>
                                    "username" in item ? (
                                        // eslint-disable-next-line react/jsx-key
                                        <li
                                            {...getItemProps({
                                                key: item.id,
                                                index,
                                                item,
                                            })}
                                        >
                                            <UserSearchResult
                                                user={item}
                                                className={
                                                    highlightedIndex === index
                                                        ? "bg-primary-700"
                                                        : "bg-primary-800"
                                                }
                                            />
                                        </li>
                                    ) : (
                                        <li
                                            {...getItemProps({
                                                key: item.id,
                                                index,
                                                item,
                                            })}
                                        >
                                            <AnsSearchResult
                                                room={item}
                                                className={
                                                    highlightedIndex === index
                                                        ? "bg-primary-700"
                                                        : "bg-primary-800"
                                                }
                                            />
                                        </li>
                                    )
                                )} */}
                    </ul>
                </SearchOverlay>
            ) : null}
        </div>
    );
};
