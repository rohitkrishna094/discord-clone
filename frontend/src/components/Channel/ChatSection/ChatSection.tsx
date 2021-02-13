import { Flex, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react';
import ResizeTextarea from 'react-textarea-autosize';
import React, { useState } from 'react';
import './ChatSection.scss';
import { MdAddCircle } from 'react-icons/md';

const AutoResizeTextarea = React.forwardRef((props: any, ref: any) => {
  return (
    <Textarea
      minH="unset"
      overflow="hidden"
      w="100%"
      resize="none"
      ref={ref}
      minRows={1}
      as={ResizeTextarea}
      maxHeight="500px"
      {...props}
    />
  );
});

const ChatSection = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <Flex className="chat-section-wrapper">
      <Flex className="chat-section">Chat Section Wrapper</Flex>
      <InputGroup className="chat-type-group">
        <AutoResizeTextarea
          placeholder="Message this channel"
          value={value}
          onChange={handleInputChange}
        />

        <InputLeftElement className="add-icon-wrapper">
          <MdAddCircle className="add-icon" />
        </InputLeftElement>
      </InputGroup>
    </Flex>
  );
};
export default ChatSection;
