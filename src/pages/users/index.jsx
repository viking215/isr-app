import Heading from "../../components/Heading";
import {GET_ALL_USERS} from "../../../queries/getAllUsers.graphql"
import {addApolloState, initializeApollo} from "../../lib/apolloClient";
import Link from "next/link"
import Image from "next/image"
import defaultAvatar from "../../../public/defaultUser.png"
import styled from "styled-components";

const Users = ({data}) => {

    const CustomImage = styled(Image)`
      border-radius: 100px;
    `

    const UserCard = styled.div`
      display: flex;
      flex-direction: row;
      margin: 10px;
      padding: 5px;
      justify-content: start;
      border: lightblue solid 2px;
      border-radius: 5px;
      width: 50%;
    `

    const UsersWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `

    const Name = styled.div`
      font-size: 15px;
      font-weight: bold;
      margin: 0 10px;
    `

    return (
        <UsersWrapper>
            {data?.users.map(({id, name, lastName, avatar_url}) => (
                <Link href={`users/${id}`} key={id}>
                    <UserCard>
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
                    </UserCard>
                </Link>
            ))}
        </UsersWrapper>
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