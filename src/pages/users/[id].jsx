import UserInfo from "components/UserInfo"
import {addApolloState, initializeApollo} from "lib/apolloClient";
import GET_ALL_USERS from "../../../queries/getAllUsers.graphql"
import GET_USER_INFO from "../../../queries/getUserInfo.graphql"
import Head from "next/head";


const UserPage = ({user}) => {
    return (
        <>
            <Head>
                <title>{user.users_by_pk.name}</title>
            </Head>
            <UserInfo user={user}/>
        </>
    )
}

export const getStaticPaths = async (context) => {
    const apolloClient = initializeApollo();

    const response = await apolloClient.query({
        query: GET_ALL_USERS
    })

    const data = response?.data

    const paths = data?.users.map(({id}) => ({
        params: {id: id.toString()}
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const apolloClient = initializeApollo();
    const { id } = context.params;

    const response = await apolloClient.query({
        query: GET_USER_INFO,
        variables: {
            id,
        },
    })

    const data = response?.data

    return addApolloState(apolloClient, {
        props: {user: data},
        revalidate: 10,
    })
}

export default UserPage