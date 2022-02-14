import MainHeader from "components/Header";
import Footer from "components/Footer";
import styled from "styled-components";

const Layout = ({children}) => {

    const AppWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `

    return <AppWrapper>
        <MainHeader />
        {children}
        <Footer />
    </AppWrapper>

}

export default Layout