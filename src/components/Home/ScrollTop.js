import React from 'react'
import styled from 'styled-components'

import scrolltop from '../../assets/images/scrolltop.png'

export default function ScrollTop({ handleGoToScrollTop }) {
  return <ScrollTopButton onClick={handleGoToScrollTop} />
}

const ScrollTopButton = styled.button`
  width: 96px;
  height: 96px;
  position: fixed;
  bottom: 109px;
  right: 143px;
  background: url(${scrolltop}) no-repeat;
`
