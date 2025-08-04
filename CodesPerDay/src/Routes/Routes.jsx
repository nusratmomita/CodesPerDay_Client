import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import InterviewPractice from "../Pages/InterviewPractice/InterviewPractice";
import Pricing from "../Pages/Pricing/Pricing";


export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/courses",
                Component: Courses
            },
            {
                path: "/interview",
                Component: InterviewPractice
            },
            {
                path: "/pricing",
                Component: Pricing
            }
        ]
    }
])