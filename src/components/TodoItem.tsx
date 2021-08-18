import React from 'react';
import {
  Flex,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import EditableTodoButton from './EditableTodoButton';
import ITodoData from '../interfaces';
import { useStores } from '../hooks/useStores';

const TodoItem: React.FC<{ data: ITodoData }> = ({ data }) => {
  const { todoStore } = useStores();

  return (
    <Editable
      textAlign='left'
      fontSize='md'
      defaultValue={data.title}
      onChange={(title) =>
        todoStore.updateTodo(data.id, { title, updatedAt: new Date() })
      }
      isPreviewFocusable={true}>
      <Flex
        borderRadius='12px'
        justifyContent='space-between'
        alignItems='center'
        border='1px'
        borderColor='gray.300'
        p='2'
        mb='1.5'>
        <EditablePreview fontSize='lg' />
        <EditableInput fontSize='lg' value={data.title} />
        <Flex>
          <EditableTodoButton />
          <IconButton
            aria-label='Delete'
            icon={<DeleteIcon />}
            onClick={() => todoStore.deleteTodo(data.id)}
          />
        </Flex>
      </Flex>
    </Editable>
  );
};

export default TodoItem;
