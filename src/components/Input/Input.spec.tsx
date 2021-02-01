import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

const propsTests: any = {
  label: 'test-label',
  iconStart: 'test-icon-start',
  iconEnd: 'test-icon-end',
};

describe('<Input>', () => {
  it('deve renderizar o input', () => {
    render(<Input {...propsTests} />);

    screen.getByText('test-label');
  });

  it('deve renderizar iconStart e iconEnd', () => {
    render(<Input {...propsTests} />);
    screen.getByText('test-icon-start');
    screen.getByText('test-icon-end');
  });
});
