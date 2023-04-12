import { Task } from "./Task";
import { UnorderedList } from '@chakra-ui/react'

export const TaskList = (props) => {
    const { list,onDeleteOne, onChangeState} = props;

    const handleDeleteOne = (title) => {
        onDeleteOne(title)
    }

    const handleChangeState = (title, newIschecked) => {
        onChangeState(title, newIschecked)
    };


    return(
        <UnorderedList>
            {list.map((task)=>{
                return <Task key={task.title} title = {task.title} isPending = {task.isChecked} description={task.description} onDelete={handleDeleteOne} onChangeState={handleChangeState}/>;
            })}
        </UnorderedList>
    )
}