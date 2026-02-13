import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export const MasterLayout = () => {
    return (
    <>
        <div className="cursor js-cursor"></div>
        <div className="preloader">
            <div className="loadbar"></div>
            <figure>
                <img src="/assets/images/e-logo.png" alt="Image" />
            </figure>
        </div>
        <div className="page-transition">
            <div className="layer"></div>
        </div>
        <main id="main">
            <Header />
            <Outlet />
            <Footer />
        </main>
    </>
    )
}