import React from 'react'
import styled from 'styled-components'

import search from '../../assets/images/search.png'

export default function Input({ handleSearchSubmit, input, onChange }) {
  return (
    <CustomInput onSubmit={handleSearchSubmit}>
      <input type="text" value={input} onChange={onChange} />
      <button type="submit" />
    </CustomInput>
  )
}

const CustomInput = styled.form`
  width: 454px;
  height: 76px;
  background: #fff;
  border-radius: 38.5px;
  box-shadow: 0 6px 39px 0 rgba(165, 165, 165, 0.31);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 23px 32px;

  input {
    border: none;
    background: initial;
    height: 100%;
    flex: 1;
    font-size: 24px;
    font-weight: 600;
    outline: none;
  }

  button {
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: url(${search}) no-repeat center -27px;
  }
`
