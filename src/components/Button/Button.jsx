import React from 'react'
import styled from 'styled-components'

import colors from '../../style/colors'

export default function Button({ innerText, width, height }) {
  return (
    <CustomButton width={width} height={height}>
      {innerText}
    </CustomButton>
  )
}

const CustomButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${colors['purple']};
`
