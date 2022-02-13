import MainHeader from "components/Header";
import Footer from "components/Footer";

const Layout = ({children}) => {
    return <>
        <MainHeader />
        {children}
        <Footer />
    </>

}

export default Layout