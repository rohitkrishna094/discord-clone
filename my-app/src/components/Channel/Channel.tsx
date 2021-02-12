import React from 'react';
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { BiHash } from 'react-icons/bi';
import { IoNotificationsSharp, IoHelpCircle } from 'react-icons/io5';
import { RiPushpinFill } from 'react-icons/ri';
import { CgInbox } from 'react-icons/cg';
import { BsPeopleFill } from 'react-icons/bs';
import './Channel.scss';
import ChannelContent from './ChannelContent/ChannelContent';

const ToolbarWrapper = ({ children, label }: any) => {
  return (
    <Tooltip
      hasArrow
      label={label}
      bg="#18191c"
      color="white"
      placement="bottom"
      padding="10px"
      paddingTop="8px"
      paddingBottom="8px"
      fontSize="14px"
      borderRadius="5px"
      arrowPadding={15}
      arrowSize={8}
    >
      {children}
    </Tooltip>
  );
};

const Toolbar = () => {
  return (
    <Flex className="toolbar">
      <ToolbarWrapper label="Turn on/off this channel notifications">
        <Flex className="toolbar-item">
          <IoNotificationsSharp />
        </Flex>
      </ToolbarWrapper>
      <ToolbarWrapper label="Pinned Messages">
        <Flex className="toolbar-item">
          <RiPushpinFill />
        </Flex>
      </ToolbarWrapper>
      <ToolbarWrapper label="Member List">
        <Flex className="toolbar-item">
          <BsPeopleFill />
        </Flex>
      </ToolbarWrapper>
      <InputGroup className="search-input-group">
        <Input placeholder="Search" type="text" />
        <InputRightElement>
          <SearchIcon className="search-icon" color="#8e9297" />
        </InputRightElement>
      </InputGroup>
      <ToolbarWrapper label="Inbox">
        <Flex className="toolbar-item">
          <CgInbox />
        </Flex>
      </ToolbarWrapper>
      <ToolbarWrapper label="Help">
        <Flex className="toolbar-item">
          <IoHelpCircle className="help-icon" />
        </Flex>
      </ToolbarWrapper>
    </Flex>
  );
};

const ChannelHeader = () => {
  return (
    <Flex className="channel-header">
      <Flex className="hash-icon-wrapper">
        <BiHash className="hash-icon" />
      </Flex>
      <Flex alignItems="center" justifyContent="center" mr="auto">
        <h4>Channel Name</h4>
      </Flex>
      <Flex>
        <Toolbar />
      </Flex>
    </Flex>
  );
};

const Channel = () => {
  return (
    <Flex className="channel">
      <ChannelHeader />
      <ChannelContent />
    </Flex>
  );
};

export default Channel;
