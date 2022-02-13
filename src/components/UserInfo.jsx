import Heading from "components/Heading";
import Image from "next/image"
import styled from "styled-components";


const UserInfo = ({user}) => {
    const {name, lastName, id, isManager, avatar_url, us_tasks} = user.users_by_pk

    if (!user) {
        return <Heading tag="h3" title="Empty user" />
    }

    const count = us_tasks.length

    const CustomImage = styled(Image)`
      border-radius: 100px;
    `
    const UserWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `

    return (
        <UserWrapper>
            <CustomImage
                src={avatar_url}
                alt="/defaultUser"
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                width="120"
                height="120"
            />
            <span>{user.id}</span>
            <Heading tag="h1" title={name} />
            <Heading tag="h1" title={lastName} />
            <div>{isManager ? 'Manager' : ''}</div>
            <div>posts count: {count}</div>
        </UserWrapper>

    )
}


export default UserInfo