import {
  Box,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import OnlineStatus from '../OnlineStatus/OnlineStatus';
import DefaultAvatar from '../../../assets/images/default-avatar.png';
import './Avatar.scss';

const UserMenuItem = ({
  type = 'online',
  message = 'Online',
  caption
}: any) => {
  return (
    <Flex alignItems="center" className="user-menu-item">
      <Box alignSelf="flex-start" marginTop="6px">
        <OnlineStatus type={type} />
      </Box>
      <Flex direction="column">
        <Box>{message}</Box>
        {caption && <Box className="caption">{caption}</Box>}
      </Flex>
    </Flex>
  );
};

const UserMenu = () => {
  return (
    <VStack className="user-menu">
      <UserMenuItem type="online" message="Online" />
      <HorizontalLine />
      <UserMenuItem type="away" message="Idle" />
      <UserMenuItem
        type="busy"
        message="Do Not Disturb"
        caption="You will not receive any desktop notifications"
      />
      <UserMenuItem
        type="invisible"
        message="Invisible"
        caption="You will not appear online, but will have full access to all of discord-clone"
      />
    </VStack>
  );
};

const Avatar = ({
  img = DefaultAvatar,
  onlineStatus = 'online',
  random = false
}: any) => {
  if (random) {
    const uid = uuidv4();
    img = `https://i.pravatar.cc/150?u=${uid}`;
  }
  return (
    <Popover placement="top-end">
      <PopoverTrigger>
        <Flex className="avatar">
          <img src={img} alt="Profile" />
          <OnlineStatus type={onlineStatus} />
        </Flex>
      </PopoverTrigger>
      <PopoverContent className="popover-content">
        <PopoverBody>
          <UserMenu />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
export default Avatar;
