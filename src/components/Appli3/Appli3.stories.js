import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { DocgenButtonStory } from './Appli3';

storiesOf('Test', module)
  .addDecorator(withKnobs)
  .add('test', () => <DocgenButtonStory />);
