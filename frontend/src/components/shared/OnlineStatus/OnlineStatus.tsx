import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import './OnlineStatus.scss';

/*
Four types are available
online, invisible, away, busy
*/

const OnlineStatus = ({ type = 'online', className = '' }: any) => {
  return (
    <Flex className="status">
      <Box className={`status-inner ${type} ${className}`} />
    </Flex>
  );
};

export default OnlineStatus;
