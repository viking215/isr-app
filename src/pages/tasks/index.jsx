import {addApolloState, initializeApollo} from "lib/apolloClient";
import GET_ALL_TASKS from "../../../queries/getAllTasks.graphql"
import {CheckCircleTwoTone, ClockCircleTwoTone} from "@ant-design/icons";
import Link from "next/link";
import {CustomCard, CustomImage, CustomWrapper} from "@/styles"
import Head from "next/head";

const Tasks = ({data}) => {

    return (
        <>
            <Head>
                <title>Tasks</title>
            </Head>
            <CustomWrapper>
                {
                    data?.tasks.map(({title, description, id, task_user, isDone}) => {
                        const isTaskDone = isDone ? (
                            <div>
                                Progress: <CheckCircleTwoTone twoToneColor="#2db47c"/>
                            </div>
                        ) : (
                            <div>
                                Progress: <ClockCircleTwoTone twoToneColor="#c29344"/>
                            </div>
                        );

                        return (
                            <Link href={`tasks/${id}`} key={id}>
                                <CustomCard key={id}>
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
                                    <div>{isTaskDone}</div>
                                </CustomCard>
                            </Link>
                        )})
                }
            </CustomWrapper>
        </>

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