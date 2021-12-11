import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../styles/tailwind.css';

import { Button } from './index';

const Component: ComponentMeta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default Component;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
