import React from 'react';
import { useEditableControls, IconButton } from '@chakra-ui/react';
import { EditIcon, CheckIcon } from '@chakra-ui/icons';

const EditableTodoButton: React.FC = () => {
  const { isEditing, getSubmitButtonProps, getEditButtonProps } =
    useEditableControls();

  if (isEditing) {
    return (
      <IconButton
        icon={<CheckIcon />}
        mr='1'
        ml='1'
        aria-label='Update'
        onClick={() => console.log('123')}
        {...getSubmitButtonProps()}
      />
    );
  }

  return (
    <IconButton
      icon={<EditIcon />}
      mr='1'
      ml='1'
      aria-label='Edit'
      {...getEditButtonProps()}
    />
  );
};

export default EditableTodoButton;
