import React from "react";
import { HeaderController } from "../modules/display/HeaderController";
import { DefaultLayout } from "../modules/layouts/DefaultLayout";
// import { FeedController } from "./FeedController";

export default function DashboardPage({}) {
  return (
    <>
      <HeaderController embed={{}} title={"Dashboard"} />
      <DefaultLayout enableLayout>
        {/* <FeedController /> */}
        Feed
      </DefaultLayout>
    </>
  );
}
