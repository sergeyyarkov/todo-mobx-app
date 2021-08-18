import { observer } from 'mobx-react';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import TodoItem from './TodoItem';
import { useStores } from '../hooks/useStores';

const TodoList: React.FC = () => {
  const { todoStore } = useStores();
  return (
    <Flex flexDir='column' justifyContent='space-between' mt='5'>
      {todoStore.todos.map((todo) => {
        return <TodoItem key={todo.id} data={todo} />;
      })}
    </Flex>
  );
};

export default observer(TodoList);
