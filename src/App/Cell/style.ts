import styled from 'styled-components';

export const Row = styled.td`
  &.cell-content__wrapper {
    width: 20px;
    height: 20px;
    background-color: #dfd0d0;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #000000;
    padding: 0;
  }
    

  &.cell-content__wrapper.disabled-true {
    background-color: gray;
  }

  &.cell-content__wrapper.opened-true {
    background-color: #ffffff;
    color: #000000;
  }
    
`
