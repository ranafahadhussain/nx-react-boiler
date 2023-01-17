import React, { Fragment } from 'react';
import {
  ModalBlock,
  ModalBody,
  ModalDiscription,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from './ModalStyles';

type ModalProps = {
  title?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  active?: boolean;
  hideModal?: () => void;
  discription?: string;
};

export const Modal = (props: ModalProps) => {
  const { title, discription, footer, children, active, hideModal } = props;

  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={hideModal}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalDiscription>{discription}</ModalDiscription>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
      ;
    </Fragment>
  );
};
