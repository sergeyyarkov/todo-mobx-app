import { Flex, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import React from 'react';

const TodoHeader: React.FC = () => {
  return (
    <Flex justifyContent='space-between'>
      <Heading bgGradient='linear(to-l, #7928CA,#FF0080)' bgClip='text'>
        Todo App
      </Heading>
      <ColorModeSwitcher justifySelf='flex-end' />
    </Flex>
  );
};

export default TodoHeader;
