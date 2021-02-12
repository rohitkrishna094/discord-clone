import React from 'react';
import { Box, Divider } from '@chakra-ui/react';
import './VerticalLine.scss';

interface IVerticalLineProps {
  style: React.CSSProperties;
}

const VerticalLine = ({ style }: IVerticalLineProps) => (
  <div className="vertical-line-divider" style={style} />
);

export default VerticalLine;
