import React from 'react';
import { Box } from '@chakra-ui/react';
import './OnlineStatus.scss';

/*
Four types are available
online, invisible, away, busy
*/

const OnlineStatus = ({ type = 'online', className = '' }: any) => {
  return <Box className={`status ${type} ${className}`} />;
};

export default OnlineStatus;
