import "antd/dist/antd.css";
import {GlobalStyle, MyLayout, Wrapper} from "@/styles";
import {useApollo} from "lib/apolloClient";
import {ApolloProvider} from "@apollo/client";
import Layout from "components/Layout";

const App = ({Component, pageProps}) => {
    const apolloClient = useApollo(pageProps);

    return (
        <ApolloProvider client={apolloClient}>
            <GlobalStyle/>
            <Wrapper>
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
