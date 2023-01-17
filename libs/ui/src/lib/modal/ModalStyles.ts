import { styled } from '../Theme';

export const ModalBlock = styled('div', {
  alignItems: 'center',
  bottom: 0,
  justifyContent: 'center',
  left: 0,
  overflow: 'hidden',
  padding: '0.4rem',
  position: 'fixed',
  right: 0,
  top: 0,
  display: 'flex',
  opacity: 1,
  zIndex: 400,
});

export const ModalOverlay = styled('a', {
  background: 'rgba(0, 0, 0, 0.5)',
  bottom: 0,
  cursor: 'default',
  display: 'block',
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
});

export const ModalClose = styled('a', {
  float: 'right !important',
  textDecoration: 'none !important',
  cursor: 'pointer',
  fontSize: '1rem',
});

export const ModalContainer = styled('div', {
  bg: '$cardGradient',
  backdropFilter: 'blur(50px)',
  borderRadius: '$base',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '75vh',
  maxWidth: '550px',
  padding: '0 0.8rem',
  width: '100%',
  animation: 'slide-down 0.2s ease 1',
  zIndex: 1,
  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.2)',
});

export const ModalBody = styled('div', {
  overflowY: 'auto',
  padding: '30px 10px',
  position: 'relative',
});

export const ModalHeader = styled('div', {
  justifyContent: 'space-between',
  color: '#303742',
  margin: 'auto',
  padding: '20px 5px 10px 5px',
});

export const ModalTitle = styled('h1', {
  fontFamily: '$grotesk',
  fontSize: '$2xl',
  fontWeight: '$bold',
  textTransform: 'capitalize',
  textAlign: 'center',
  color: 'white',
  '@md': {
    fontSize: '$3xl',
  },
});

export const ModalDiscription = styled('h4', {
  fontFamily: '$grotesk',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  color: 'white',
  marginTop: '$4',
  '@md': {
    fontSize: 'md',
  },
});

export const ModalFooter = styled('div', {
  padding: '10px 0px',
});

export const Button = styled('button', {
  background: '#7b2cbf',
  color: 'white',
  fontSize: '1em',
  margin: '10px',
  padding: '5px 10px',
  border: '2px solid #7b2cbf',
  borderRadius: '3px',
  cursor: 'pointer',
});
