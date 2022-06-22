import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderController } from "./modules/display/HeaderController";
import { MainLayout } from "./modules/layouts/MainLayout";
import { AuthProvider } from "./modules/auth/AuthProvider";
import { useDarkMode } from "./global-stores/useDarkMode";
import Loading from "./ui/loader/Loading";
import { OverlayGrid } from "./ui/layout/OverlayGrid";
import { gql, useQuery } from "@apollo/client";

const GET_QUESTIONS = gql`
    query {
        questionsAll {
            id
            text
            votes
            title
            creatorUsername
            createdAt
            answerCount
            answers {
                id
                title
                content
            }
            questionUpvotes {
                value
            }
            creator {
                username
                avatarUrl
            }
            answers {
                id
                title
                content
            }
        }
    }
`;
// import NProgress from "nprogress";
// import {}
// import "nprogress/nprogress.css";

// Router.events.on("routeChangeStart", () => {
//     NProgress.start();
// });
// Router.events.on("routeChangeComplete", () => {
//     if (isServer) alert("done");
//     NProgress.done();
// });
// Router.events.on("routeChangeError", () => {
//     NProgress.done();
// });

const Home = lazy(() => import("./pages/home"));
const Notification = lazy(() => import("./pages/notification"));
const Login = lazy(() => import("./pages/login"));
const Profile = lazy(() => import("./pages/profile"));
const ForgetPassword = lazy(() => import("./pages/forgot-password"));
const ChangePassword = lazy(() => import("./pages/change-password"));
const ConfirmAccount = lazy(() => import("./pages/confirm-account"));
const Register = lazy(() => import("./pages/register"));
const NotFound = lazy(() => import("./pages/404"));

function App() {
    // const { loading, error, data } = useQuery(GET_QUESTIONS, {
    //     variables: {},
    // });
    // console.log({ loading, error, data });

    const { darkMode } = useDarkMode();
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    return (
        <>
            <HeaderController />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgetPassword />}
                    />
                    <Route
                        path="/confirm-account/:token"
                        element={<ConfirmAccount />}
                    />
                    <Route
                        path="/change-password/:token"
                        element={<ChangePassword />}
                    />
                    <Route
                        path="*"
                        element={
                            <AuthProvider>
                                <div className="w-full min-h-full bg-white dark:bg-dark-900">
                                    <MainLayout>
                                        <Routes>
                                            <Route
                                                path="/"
                                                element={<Home />}
                                            />
                                            <Route
                                                path="/u/:username"
                                                element={<Home />}
                                            />
                                            <Route
                                                path="/notifications"
                                                element={<Notification />}
                                            />
                                            <Route
                                                path="/search"
                                                element={<Home />}
                                            />
                                            <Route
                                                path="/profile"
                                                element={<Profile />}
                                            />
                                            <Route
                                                path="*"
                                                element={<NotFound />}
                                            />
                                        </Routes>
                                    </MainLayout>
                                </div>
                            </AuthProvider>
                        }
                    />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
