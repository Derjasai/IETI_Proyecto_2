import { useState } from "react";
import { Box, ListItem, IconButton, Checkbox, Stack, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export const Task = (props)=>{
    const {title, isPending, description, onDelete, onChangeState} = props;

    const [isChecked, setIsChecked] = useState(isPending)

    const handleDelete = ( ) => {
        onDelete(title);
    }

    const handleChangeState = () => {
        const newIschecked = !isChecked
        setIsChecked(newIschecked);
        onChangeState(title, newIschecked)
    }

    return(
        <ListItem>
            <Box width={300} maxWidth={300}>
                <Stack spacing={5} direction='row'>
                    <Checkbox isChecked={isChecked} onChange={handleChangeState}><label id="{title}" style={isChecked ? { textDecoration: "line-through" } : {}}> {title} </label></Checkbox>
                    <IconButton onClick={handleDelete} icon={<DeleteIcon />}></IconButton>
                </Stack>
                <Text>{description}</Text>
            </Box>
        </ListItem>
    )
}