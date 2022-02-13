import "antd/dist/antd.css";
import {AppProps} from "next/app";
import {GlobalStyle, MyLayout, Wrapper} from "@/styles";
import {useApollo} from "lib/apolloClient";
import {ApolloProvider} from "@apollo/client";
import MainHeader from "components/Header";
import Layout from "components/Layout";

const App = ({Component, pageProps}: AppProps) => {
    const apolloClient = useApollo(pageProps);

    return (
        <ApolloProvider client={apolloClient}>
            <GlobalStyle/>
            <Wrapper>
                {/* <MainHeader />*/}
                <Layout>
                    <MyLayout>
                        <Component {...pageProps} />
                    </MyLayout>
                </Layout>
            </Wrapper>
        </ApolloProvider>
    );
};

export default App;
