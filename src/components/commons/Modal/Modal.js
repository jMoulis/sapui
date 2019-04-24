import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import { FlexBox } from 'components/commons/FlexBox';
import { Button, BtnClose } from 'components/commons/Buttons';
import { Icon } from 'components/commons/Icons';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0
  }
`;

const Root = styled.div`
  label: ModalRoot;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: ${({ displayStatus }) =>
    displayStatus === 'closing' ? fadeOut : fadeIn};
  animation-timing-function: ease-in;
  animation-duration: 300ms;
`;

const Wrapper = styled(FlexBox)`
  background-color: white;
  width: 35rem;
  min-height: 40rem;
  border-radius: 3px;
`;

const Header = styled(FlexBox)`
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  padding: 1rem;
`;
const Content = styled(FlexBox)`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.neutral2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.neutral2};
`;
const Footer = styled(FlexBox)`
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.action.secondary};
  & > :first-of-type {
    flex: 1;
  }
`;

const Modal = ({ children, show, header, content, footer, close }) => {
  const [displayStatus, setDisplayStatus] = useState('closed');
  const [prevShow, setPrevShow] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    let timer = null;
    const wasOpen = prevShow && !show;
    setPrevShow(show);
    if (wasOpen) {
      setDisplayStatus('closing');
      timer = setTimeout(() => {
        setDisplayStatus('closed');
      }, 300);
    } else if (show) {
      setDisplayStatus('show');
    }
    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  if (displayStatus === 'closed') return null;

  return createPortal(
    <Root displayStatus={displayStatus}>
      <Wrapper column>
        {children || (
          <>
            <Header>
              {header}
              <BtnClose square action="danger" small onClick={close}>
                <Icon icon="close" />
              </BtnClose>
            </Header>
            <Content column flex="1">
              {content}
            </Content>
            <Footer>
              {
                <FlexBox
                  css={{ alignItems: 'center', justifyContent: 'flex-end' }}
                >
                  {footer.submit && (
                    <Button small type="submit" onClick={footer.submit}>
                      {t('commons.ok')}
                    </Button>
                  )}
                  {footer.cancel && (
                    <Button
                      action="neutral"
                      type="button"
                      small
                      onClick={footer.cancel}
                    >
                      {t('commons.cancel')}
                    </Button>
                  )}
                </FlexBox>
              }
            </Footer>
          </>
        )}
      </Wrapper>
    </Root>,
    document.body,
  );
};

export default Modal;
