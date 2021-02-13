import {
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  Textarea
} from '@chakra-ui/react';
import ResizeTextarea from 'react-textarea-autosize';
import React, { useEffect, useRef, useState } from 'react';
import { BiHash } from 'react-icons/bi';
import './ChatSection.scss';
import { MdAddCircle } from 'react-icons/md';
import Avatar from '../../shared/Avatar/Avatar';

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

const ChatSectionItem = () => {
  return (
    <Flex className="chat-section-item">
      <Avatar random />
      <Flex className="message-wrapper">
        <Flex className="user-info">
          <span className="username">John Doe</span>
          <span className="message-date">02/07/2021</span>
        </Flex>
        <Flex className="message">
          Actual Message Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Libero, aut error aliquid quis vel, animi officia eius ex
          blanditiis explicabo ab praesentium iusto? Maiores dignissimos
          asperiores fugiat eius perferendis vero. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Labore obcaecati necessitatibus debitis
          et. Qui perferendis, adipisci cum reiciendis ullam architecto
          asperiores perspiciatis labore beatae id soluta molestias delectus
          modi placeat?
        </Flex>
      </Flex>
    </Flex>
  );
};

const ChatSection = () => {
  const [value, setValue] = useState('');
  const messagesEndRef: any = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Flex className="chat-section-wrapper">
      <Flex className="chat-section">
        <Flex className="chat-section-header">
          <Box>
            <BiHash id="hash-icon" />
            <h1>Welcome to This channel!</h1>
          </Box>
          <span>This is the start of conversation in this channel-name</span>
        </Flex>
        {[...Array(30)].map((_, i) => (
          <ChatSectionItem key={Math.random()} />
        ))}
        <div ref={messagesEndRef} />
      </Flex>
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
