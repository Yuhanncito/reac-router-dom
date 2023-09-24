
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function LayoutPrivate() {
    const {user} = useUserContext();

    return <>
        {user ? <Outlet/> : <Navigate to="/" />
        }
    </>
}
