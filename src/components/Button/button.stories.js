// /src/components/Button/button.stories.js
import React from 'react';
import Button from './index.js';
import { withKnobs, text } from '@storybook/addon-knobs';
export default { title: 'Button component', decorators: [withKnobs] };
export const button = () => {
  const message = text('Text', 'Tung test btn');
  return <Button message={message}></Button>;
};
