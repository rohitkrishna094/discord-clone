import { Flex } from '@chakra-ui/react';
import React from 'react';
import Channel from '../Channel/Channel';
import Sidebar from '../Sidebar/Sidebar';
import './Base.scss';

const Base = () => {
  return (
    <Flex className="base">
      <Sidebar />
      <Channel />
    </Flex>
  );
};

export default Base;
