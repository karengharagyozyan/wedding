import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { me } from "@/services/auth.service";

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({
    children,
}: Props) {

    const [loading, setLoading] = useState(true);

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {

        async function checkAuth() {

            try {

                await me();

                setAuthenticated(true);

            } catch {

                setAuthenticated(false);

            } finally {

                setLoading(false);

            }

        }

        checkAuth();

    }, []);

    if (loading) {

        return <h2>Loading...</h2>;

    }

    if (!authenticated) {

        return <Navigate to="/admin/login" replace />;

    }

    return children;

}