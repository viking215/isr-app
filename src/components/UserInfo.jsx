import Heading from "components/Heading";
import {CustomWrapper, CustomImage} from "@/styles";

const UserInfo = ({user}) => {
    const {name, lastName, isManager, avatar_url, us_tasks} = user.users_by_pk

    if (!user) {
        return <Heading tag="h3" title="Empty user" />
    }

    const count = us_tasks.length


    return (
        <CustomWrapper>
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
        </CustomWrapper>

    )
}


export default UserInfo