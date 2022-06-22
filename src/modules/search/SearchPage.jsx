import router from "next/router";
import React, { useState } from "react";
import { useScreenType } from "../../shared-hooks/useScreenType";
import { InfoText } from "../../ui/InfoText";
import { SearchHeader } from "../../ui/mobile/MobileHeader";
import {
    AnsSearchResult,
    UserSearchResult,
} from "../../ui/Search/SearchResult";
import { HeaderController } from "../display/HeaderController";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";

export const SearchPage = ({}) => {
    const screenType = useScreenType();
    if (screenType !== "fullscreen") router.push("/");

    const [results, setResults] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);

    return (
        <>
            <HeaderController title="Search" />
            <DefaultDesktopLayout
                mobileHeader={
                    <SearchHeader
                        onSearchChange={(e) => {
                            console.log(e.target.value);
                            setSearchLoading(true);
                        }}
                        searchPlaceholder="Search"
                        onBackClick={() => router.back()}
                        searchLoading={searchLoading}
                    />
                }
            >
                <div className="h-full w-full">
                    {results &&
                        results.map((userOrAns, i) => {
                            if ("username" in userOrAns) {
                                return (
                                    <UserSearchResult
                                        onClick={() =>
                                            router.push(
                                                `/u/${userOrAns.username}`
                                            )
                                        }
                                        key={i}
                                        user={userOrAns}
                                    />
                                );
                            } else {
                                return (
                                    <AnsSearchResult
                                        onClick={() =>
                                            router.push(`/room/${userOrAns.id}`)
                                        }
                                        key={i}
                                        room={userOrAns}
                                    />
                                );
                            }
                        })}
                    {!results?.length && (
                        <InfoText className="pr-4 pl-5 py-3">
                            no results
                        </InfoText>
                    )}
                </div>
            </DefaultDesktopLayout>
        </>
    );
};

SearchPage.ws = true;
