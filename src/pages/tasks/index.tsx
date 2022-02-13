
import {addApolloState, initializeApollo} from "lib/apolloClient";
// @ts-ignore
import {GET_ALL_TASKS} from "../../../queries/getAllTasks.graphql"
import styled from "styled-components";
import Image from "next/image";
import {CheckCircleTwoTone, ClockCircleTwoTone} from "@ant-design/icons";
import Link from "next/link";

const Tasks = ({data}) => {
    const TasksWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    const isDone = data.isDone ? (
        <div>
            Progress: <CheckCircleTwoTone twoToneColor="#2db47c"/>
        </div>
    ) : (
        <div>
            Progress: <ClockCircleTwoTone twoToneColor="#c29344"/>
        </div>
    );

    const CustomImage = styled(Image)`
      border-radius: 100px;
    `

    const TaskCard = styled.div`
      display: flex;
      flex-direction: row;
      margin: 10px;
      padding: 5px;
      justify-content: start;
      border: lightblue solid 2px;
      border-radius: 5px;
      width: 50%;
    `

    return (
        <TasksWrapper>
            {
                data?.tasks.map(({title, description, id, task_user}) => (
                    <Link href={`tasks/${id}`} key={id}>
                        <TaskCard key={id}>
                            <CustomImage
                                src={task_user.avatar_url}
                                alt="./defaultUser"
                                placeholder="blur"
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                                width="80"
                                height="80"
                            />
                            <div>{title}</div>
                            <div>{description}</div>
                            <div>{isDone}</div>
                        </TaskCard>
                    </Link>
                ))
            }
        </TasksWrapper>
    )
}


export const getStaticProps = async () => {
    const apolloClient = initializeApollo();

    const response = await apolloClient.query({
        query: GET_ALL_TASKS
    })

    const data = response?.data
    return addApolloState(apolloClient, {
        props: {data},
        revalidate: 10,
    })
}
export default Tasks