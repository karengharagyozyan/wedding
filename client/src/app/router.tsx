import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home/Home";

import Login from "@/pages/Admin/Login/Login";

import Dashboard from "@/pages/Admin/Dashboard/Dashboard";

import ProtectedRoute from "@/components/Admin/ProtectedRoute/ProtectedRoute";

import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    },

    {
        path: "/invite/:slug",
        element: <Home />
    },

    {
        path: "/admin/login",
        element: <Login />
    },

    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        )
    },

    {
        path: "*",
        element: <NotFound />
    }

]);