import GET_ALL_USERS from "../../../queries/getAllUsers.graphql"
import {addApolloState, initializeApollo} from "../../lib/apolloClient";
import Link from "next/link"
import defaultAvatar from "../../../public/defaultUser.png"
import styled from "styled-components";
import {CustomImage, CustomCard, CustomWrapper} from "@/styles"
import Head from "next/head";

const Users = ({data}) => {

    const Name = styled.div`
      font-size: 15px;
      font-weight: bold;
      margin: 0 10px;
    `

    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
            <CustomWrapper>
                {data?.users.map(({id, name, lastName, avatar_url}) => (
                    <Link href={`users/${id}`} key={id}>
                        <CustomCard>
                            <CustomImage
                                src={avatar_url}
                                alt={defaultAvatar}
                                placeholder="blur"
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                                width="80"
                                height="80"
                            />
                            <Name>
                                <div>{name}</div>
                                <div>{lastName}</div>
                            </Name>
                            <div>
                                Contact info: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quasi.
                            </div>
                        </CustomCard>
                    </Link>
                ))}
            </CustomWrapper>
        </>
    );
};

export const getStaticProps = async () => {
    const apolloClient = initializeApollo();

    const response = await apolloClient.query({
        query: GET_ALL_USERS
    })

    const data = response?.data
    return addApolloState(apolloClient, {
        props: {data},
        revalidate: 10,
    })
}

export default Users;