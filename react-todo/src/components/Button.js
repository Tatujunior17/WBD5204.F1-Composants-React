import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
padding: 6px 12px;
background: ${props => props.disabled ? '#E8E8E8' : '#FA541C'};
  border: none;
  border-radius: 4px;;
  color: ${props => props.disabled ? '#BFBFBF' : '#FAFAFA'};
  transition: all 0.3s ease-in-out;
  cursor: ${props => !props.disabled && 'pointer'};
  
  &:hover {
  background: ${props => !props.disabled && '#ff7a45'};
  }
	`;

const Button = ({disabled = false, htmlType, style, children}) => (
    <StyledBtn
        disabled={disabled}
        style={{...style}}
        htmlType={htmlType}
    >
        {children}
    </StyledBtn>
);

export default Button;