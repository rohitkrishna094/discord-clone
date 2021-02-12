import { Flex, Tooltip } from '@chakra-ui/react';
import React from 'react';
import SettingsSvg from '../../../assets/svg/SettingsSvg';
import Avatar from '../../shared/Avatar/Avatar';
import UserProfileImage from '../../../assets/images/user-profile.png';
import './Panel.scss';

const Panel = () => {
  return (
    <Flex className="panel-wrapper">
      <Flex className="panel">
        <Avatar img={UserProfileImage} />
        <Flex className="username" flexGrow={1}>
          John Doe
        </Flex>
        <Tooltip
          hasArrow
          label="User Settings"
          bg="#18191c"
          color="white"
          placement="top"
          padding="10px"
          paddingTop="8px"
          paddingBottom="8px"
          fontSize="14px"
          borderRadius="5px"
          arrowPadding={50}
          arrowSize={8}
          offset={[-3, 10]}
        >
          <Flex className="settings">
            <SettingsSvg />
          </Flex>
        </Tooltip>
      </Flex>
    </Flex>
  );
};
export default Panel;
