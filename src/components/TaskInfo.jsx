import { Avatar } from "antd";
import { CheckCircleTwoTone, ClockCircleTwoTone } from "@ant-design/icons";
import Router from "next/router";
import { ListItem, StyledList } from "@/styles";

const TaskInfo = ({ task }) => {

    const { created_at, isDone, user_id, description, title, updated_at, task_user  } = task.tasks_by_pk

    const {avatar_url, name, lastName} = task_user
   // const {isDone, id, created_at, description} = task

    const isTaskDone = isDone ? (
        <div>
            Progress: <CheckCircleTwoTone twoToneColor="#2db47c" />
        </div>
    ) : (
        <div>
            Progress: <ClockCircleTwoTone twoToneColor="#c29344" />
        </div>
    );

   const created = `Create: ${created_at}`;

    return (
        <StyledList itemLayout="horizontal">
            <ListItem
                actions={[
                    <a key={user_id}>{created}</a>,
                    <a key={user_id}>{isTaskDone}</a>,
                ]}
                title={description}
                style={{ marginTop: 16 }}
            >
                <ListItem.Meta
                    avatar={<Avatar size={64} src={avatar_url} />}
                    title={description}
                    description={`${name} | ${lastName}`}
                />
            </ListItem>
        </StyledList>
    );
};

// @ts-ignore
export default TaskInfo;