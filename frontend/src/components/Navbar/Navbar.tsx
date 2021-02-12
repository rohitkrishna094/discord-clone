import React from 'react';
import { Flex, Box, Tooltip } from '@chakra-ui/react';
import classNames from 'classnames/bind';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import DiscordSvg from '../../assets/svg/DiscordSvg';
import server1 from '../../assets/images/server1.png';
import server2 from '../../assets/images/server2.png';
import './Navbar.scss';
import HorizontalLine from '../shared/HorizontalLine/HorizontalLine';
import PlusSvg from '../../assets/svg/PlusSvg';
import VerticalLine from '../shared/VerticalLine/VerticalLine';
import { SELECT_SERVER } from '../../store/actionTypes';

const ServerIcon = ({
  color = 'auto',
  backgroundColor = 'auto',
  selected,
  img,
  svg: SVG = <DiscordSvg />,
  name = 'server-icon',
  onClick
}: any) => {
  const isServerAddButton = SVG?.type?.name === 'PlusSvg';

  let classes = selected ? 'selected' : '';
  classes += isServerAddButton ? 'server-add' : '';

  console.log(selected);

  return (
    <div
      // className={classNames('icon-wrapper', {
      //   selected: 'selected',
      //   'server-add': isServerAddButton
      // })}
      className={`icon-wrapper ${classes}`}
      style={{
        color,
        backgroundColor: img ? 'transparent' : backgroundColor
      }}
      role="button"
      onClick={onClick}
    >
      {!img && SVG && React.cloneElement(SVG)}
      {img && <img src={img} className="server-img" alt={name} />}
    </div>
  );
};

const ListItem = ({ selected, img, name, svg, id = -1 }: any) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({ type: SELECT_SERVER, payload: { selectedServer: id } });
  };
  return (
    <Tooltip
      hasArrow
      label={name}
      bg="#18191c"
      color="white"
      placement="right-end"
      padding="10px"
      paddingTop="8px"
      paddingBottom="8px"
      fontSize="14px"
      borderRadius="5px"
      arrowPadding={15}
      arrowSize={8}
      offset={[-16, 10]}
    >
      <Box className="list-item" w="100%" alignItems="center">
        <VerticalLine style={{ opacity: selected ? 1 : 'auto' }} />
        <ServerIcon
          selected={selected}
          img={img}
          svg={svg}
          name={name}
          onClick={onClick}
        />
      </Box>
    </Tooltip>
  );
};

const Navbar = () => {
  const mockState = useSelector((state: RootStateOrAny) => state.mock);
  const { selectedServer } = mockState;

  return (
    <Flex className="navbar" align="center" direction="column">
      <ListItem
        name="Home"
        svg={<DiscordSvg />}
        selected={selectedServer === -1}
      />
      <HorizontalLine />
      {/* <ListItem img={server1} selected name="Leetcode Army" />
      <ListItem img={server2} name="DSA - Key To Faang" /> */}
      {mockState.data.servers.map((server: any, i: number) => {
        const rand = Math.floor(Math.random() * 100) + 100;
        return (
          <ListItem
            key={server.id}
            id={server.id}
            name={server.name}
            img={`https://picsum.photos/id/${rand}/200`}
            selected={server.id === selectedServer}
          />
        );
      })}

      {/* {[...Array(18)].map((_) => {
        const rand = Math.floor(Math.random() * 100);
        return (
          <ListItem
            key={Math.random()}
            name="discord-server"
            img={`https://picsum.photos/id/${rand}/200`}
          />
        );
      })} */}
      <ListItem
        name="Add a Server"
        svg={<PlusSvg />}
        selected={selectedServer === -2}
      />
    </Flex>
  );
};

export default Navbar;
