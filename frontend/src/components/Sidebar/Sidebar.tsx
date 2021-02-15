/* eslint-disable max-len */
import {
  Box,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack
} from '@chakra-ui/react';
import React, { SyntheticEvent, useState } from 'react';
import {
  RiArrowDownSLine,
  RiCloseLine,
  RiShieldStarFill,
  RiLogoutCircleFill
} from 'react-icons/ri';
import { GiCutDiamond } from 'react-icons/gi';
import { HiUserAdd } from 'react-icons/hi';
import { IoNotificationsSharp } from 'react-icons/io5';
import { BiHash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import Panel from './Panel/Panel';
import { SELECT_CHANNEL } from '../../store/actionTypes';
import './Sidebar.scss';
import HorizontalLine from '../shared/HorizontalLine/HorizontalLine';

const SideBarNavMenuItem = ({
  message,
  icon: CustomIcon = <GiCutDiamond />,
  className = ''
}: any) => {
  return (
    <Flex className={`sidebar-nav-menu-item ${className}`} alignItems="center">
      <Box marginRight="auto">{message}</Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        className="icon"
        mt="-2px"
      >
        {React.cloneElement(CustomIcon)}
      </Flex>
    </Flex>
  );
};

const SideBarNavMenu = () => {
  return (
    <VStack className="sidebar-nav-menu">
      <SideBarNavMenuItem
        message="Server Boost"
        icon={<GiCutDiamond color="#FF73FA" />}
      />
      <HorizontalLine />
      <SideBarNavMenuItem
        message="Invite People"
        icon={<HiUserAdd color="#677BC4" />}
      />
      <HorizontalLine />
      <SideBarNavMenuItem
        message="Notification Settings"
        icon={<IoNotificationsSharp />}
      />
      <SideBarNavMenuItem
        message="Privacy Settings"
        icon={<RiShieldStarFill />}
      />
      <HorizontalLine />
      <SideBarNavMenuItem
        className="danger"
        message="Leave Server"
        icon={<RiLogoutCircleFill color="#F04747" />}
      />
    </VStack>
  );
};

const SideBarNav = ({ title = '' }: any) => {
  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Flex className="sidebar-nav">
          <Box mr="auto">
            <h4 id="sidebar-title">{title}</h4>
          </Box>
          <RiArrowDownSLine className="dropdown-arrow" />
          <RiCloseLine className="dropdown-close" />
        </Flex>
      </PopoverTrigger>
      <PopoverContent className="popover-content">
        <PopoverBody>
          <SideBarNavMenu />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const SideBarContentItem = ({
  selected = false,
  id = 0,
  onClick,
  channelName = 'General'
}: any) => {
  return (
    <Flex
      className="sidebar-content-item"
      style={{
        backgroundColor: selected ? 'rgba(79, 84, 92, 0.16)' : 'auto',
        color: selected ? 'white' : 'auto'
      }}
      onClick={(e) => onClick(e, id)}
    >
      <BiHash className="hash-icon" />
      <Box className="channel-name">{channelName}</Box>
    </Flex>
  );
};

const SideBarContent = ({ data }: any) => {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();

  const onClick = (e: SyntheticEvent, id: number) => {
    setSelected(id);
    dispatch({ type: SELECT_CHANNEL, payload: { id } });
    // dispatch(selectChannel(id));
  };

  return (
    <Box className="sidebar-content">
      <Flex mb="auto" direction="column">
        {data?.channels.map((channel: any) => (
          <SideBarContentItem
            key={Math.random()}
            id={channel.id}
            selected={channel.id === selected}
            onClick={onClick}
            channelName={channel.name}
          />
        ))}
      </Flex>
    </Box>
  );
};

const Sidebar = ({ channelData }: any) => {
  return (
    <Flex className="sidebar-wrapper" direction="column">
      <SideBarNav title={channelData?.name} />
      <SideBarContent data={channelData} />
      <Panel />
    </Flex>
  );
};

export default Sidebar;
