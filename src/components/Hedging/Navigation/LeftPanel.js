import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FlexBox, Box } from 'components/Layout';
import { Navigation } from '.';
import FakeForm from '../FakeForm';
import NavButton from './NavButton';

const Root = styled.aside`
  box-shadow: 0 14px 5px 2px rgba(217, 217, 217, 0.3);
  min-width: ${({ isCollapse }) => (isCollapse ? '5rem' : '20rem')};
  width: ${({ isCollapse }) => (isCollapse ? '5rem' : '20rem')};
  transition: all 200ms ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CustomBox = styled(Box)`
  padding: 1rem;
  text-align: end;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.neutral3};
`;

const LeftPanel = () => {
  const [isCollapse, setCollapse] = useState(false);
  const [isForm, displayForm] = useState(false);

  return (
    <Root isCollapse={isCollapse}>
      <FlexBox column>
        <CustomBox>
          <NavButton state={isCollapse} onClick={setCollapse} />
        </CustomBox>
        <Navigation isCollapse={isCollapse} />
      </FlexBox>

      <button type="button" onClick={() => displayForm(!isForm)}>
        ShowForms
      </button>
      {isForm && <FakeForm />}
    </Root>
  );
};

export default LeftPanel;
