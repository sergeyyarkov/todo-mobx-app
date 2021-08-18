import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

/**
 * Components
 */
import TodoInput from './components/TodoInput';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW='800px' mt='5' mr='auto' ml='auto' p='10'>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </Box>
    </ChakraProvider>
  );
};
