import React from 'react'
import styled from 'styled-components'

import colors from '../../style/colors'

export default function Button({ innerText, width, height, onClick, style }) {
  return (
    <CustomButton style={style} width={width} height={height} onClick={onClick}>
      {innerText}
    </CustomButton>
  )
}

const CustomButton = styled.button`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height / 2}px;
  background: ${colors['purple']};
  font-size: 19px;
  color: #fff;
  font-weight: 700;
  border: none;
  cursor: pointer;
  box-shadow: 10px 10px 30px 0 rgba(67, 67, 67, 0.33);
`
