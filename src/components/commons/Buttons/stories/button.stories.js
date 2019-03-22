import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { ButtonStory } from 'components/commons/Buttons/Button';
import { GridIcon } from 'components/commons/Icons';
import { Title } from 'components/commons/Headings';
import { FlexBox } from 'components/Layout';

const label = 'Actions';
const options = {
  Default: null,
  Success: 'success',
  Alert: 'alert',
  Danger: 'danger',
  Neutral: 'neutral',
};

storiesOf('Actions Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Success',
    () => (
      <div>
        <Title>Dynamic</Title>
        <ButtonStory
          lg={boolean('lg', false)}
          sm={boolean('sm', false)}
          xs={boolean('xs', false)}
          full={boolean('full', false)}
          action={select(label, options, null)}
        >
          Dynamic
        </ButtonStory>
        <Title>Regular</Title>
        <ButtonStory>Default</ButtonStory>
        <ButtonStory action="success">Success</ButtonStory>
        <ButtonStory action="alert">Alert</ButtonStory>
        <ButtonStory action="danger">Danger</ButtonStory>
        <ButtonStory action="neutral">Neutral</ButtonStory>
        <Title>Full</Title>
        <ButtonStory full>Success</ButtonStory>
        <ButtonStory full action="success">
          Success
        </ButtonStory>
        <ButtonStory full action="alert">
          Alert
        </ButtonStory>
        <ButtonStory full action="danger">
          Danger
        </ButtonStory>
        <ButtonStory full action="neutral">
          Neutral
        </ButtonStory>
      </div>
    ),
    {},
  );
