import { Outlet } from "react-router-dom";
import Header from "../header";

export default function Layout() : JSX.Element {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}