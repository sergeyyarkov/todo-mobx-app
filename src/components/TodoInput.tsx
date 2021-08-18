import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react';
import React from 'react';
import { useStores } from '../hooks/useStores';

const TodoInput: React.FC = () => {
  const [formState, setformState] = React.useState<{ title: string }>({
    title: '',
  });
  const { todoStore } = useStores();

  return (
    <Box mt='5'>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          todoStore.createTodo({
            id: todoStore.todos.length + 1,
            title: formState.title,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }}>
        <FormControl>
          <Flex>
            <Input
              placeholder='Add new todo...'
              size='md'
              mr='2'
              value={formState.title}
              onChange={(e) => setformState({ title: e.target.value })}
              isRequired
            />
            <Button type='submit' size='md'>
              Add
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default TodoInput;
