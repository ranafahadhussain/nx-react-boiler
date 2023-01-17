import React from 'react';
import { styled } from '@tote/ui';

const SubHeader: React.FC = () => {
  return (
    <>
      <HeaderMainStyle>
        <StyledLinkBox>
          <StyledLink>Home</StyledLink>
          <StyledLink>About</StyledLink>
          <StyledLink>Contact</StyledLink>
          <StyledLink>Home</StyledLink>
          <StyledLink>About</StyledLink>
          <StyledLink>Contact</StyledLink>
        </StyledLinkBox>
      </HeaderMainStyle>
      ;
    </>
  );
};
export default SubHeader;

const HeaderMainStyle = styled('div', {
  position: 'fixed',
  top: '100px',
  backgroundColor: '$primaryBorderHover',
  minwidth: '600px',
  width: '100%',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
});

const StyledLinkBox = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const StyledLink = styled('a', {
  textDecoration: 'none',
  color: '$textColor',
  fontSize: '$2',
  fontWeight: '$medium',
  pl: '$12',
  '&:hover': {
    color: '$primaryBgHover',
  },
  '&:active': {
    color: '$primaryBgActive',
  },
  '&:focus': {
    color: '$primaryBgSubtle',
  },
});
