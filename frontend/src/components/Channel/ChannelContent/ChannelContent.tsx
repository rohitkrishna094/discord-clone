import { Flex } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Avatar from '../../shared/Avatar/Avatar';
import image from '../../../assets/images/default-avatar.png';
import './ChannelContent.scss';

const ChatSection = () => {
  return (
    <Flex className="chat-section">
      <h1>Chat Section works</h1>
    </Flex>
  );
};

const MemberItem = ({ img, onlineStatus = 'online' }: any) => {
  return (
    <Flex className="member-item">
      <Avatar img={img} onlineStatus={onlineStatus} />
      <Flex>John Doe</Flex>
    </Flex>
  );
};

const MemberList = () => {
  const n = 30;
  return (
    <Flex className="member-list">
      <h4>{`Online-${n}`}</h4>
      {[...Array(n)].map((_, i) => {
        const uid = uuidv4();
        const status = [
          'online',
          'online',
          'online',
          'online',
          'away',
          'busy',
          'invisible'
        ];
        const rand = Math.floor(Math.random() * status.length);
        let img = `https://i.pravatar.cc/150?u=${uid}`;
        if (Math.random() < 0.1) img = image;
        return (
          <MemberItem
            key={Math.random()}
            img={img}
            onlineStatus={status[rand]}
          />
        );
      })}
    </Flex>
  );
};

const ChannelContent = () => {
  return (
    <Flex className="channel-content">
      <ChatSection />
      <MemberList />
    </Flex>
  );
};

export default ChannelContent;
