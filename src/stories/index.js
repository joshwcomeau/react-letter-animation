import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import LetterDemo from '../index';

storiesOf('Letter Demo', module)
  .add('default view', () => (
    <LetterDemo />
  ))
  .add('with staggered duration', () => (
    <LetterDemo staggerDurationBy={20} />
  ))
  .add('with staggered delay', () => (
    <LetterDemo staggerDelayBy={20} />
  ))
  .add('with accordian enter/exit', () => (
    <LetterDemo enterAnimation='accordionHorizontal' leaveAnimation='accordionHorizontal' staggerDelayBy={20} />
  ));
