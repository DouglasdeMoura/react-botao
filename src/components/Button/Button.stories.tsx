import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FiUser } from 'react-icons/fi';
import Button, { IProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    background: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args}>Botão</Button>;

export const Inicial = Template.bind({});
Inicial.args = {
  color: 'white',
  background: 'navy',
};

export const Carregando = Template.bind({});
Carregando.args = {
  color: 'white',
  background: 'navy',
  loading: true,
};

export const ComIconeNoComeco = Template.bind({});
ComIconeNoComeco.args = {
  color: 'white',
  background: 'navy',
  iconStart: <FiUser />,
};

export const ComIconeNoFinal = Template.bind({});
ComIconeNoFinal.args = {
  color: 'white',
  background: 'navy',
  iconEnd: <FiUser />,
};

export const ComIconeEmAmbosOsLados = Template.bind({});
ComIconeEmAmbosOsLados.args = {
  color: 'white',
  background: 'navy',
  iconStart: <FiUser />,
  iconEnd: <FiUser />,
};
