import { Flex } from '@chakra-ui/react';
import React from 'react';
import Channel from '../Channel/Channel';
import Sidebar from '../Sidebar/Sidebar';
import './Base.scss';

const Base = ({ channelData }: any) => {
  return (
    <Flex className="base">
      <Sidebar channelData={channelData} />
      <Channel />
    </Flex>
  );
};

export default Base;
