import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { axe } from 'jest-axe';

describe('Button component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Button label="Click me" />);
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('storybook-button--secondary');
    expect(button).toHaveClass('storybook-button--medium');
  });

  it('renders as primary button when primary prop is true', () => {
    const { getByText } = render(<Button label="Primary Button" primary />);
    const button = getByText('Primary Button');
    expect(button).toHaveClass('storybook-button--primary');
  });

  it('calls the onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('sets the background color correctly', () => {
    const { getByText } = render(<Button label="Custom Color" backgroundColor="red" />);
    const button = getByText('Custom Color');
    expect(button).toHaveStyle('background-color: red');
  });

  it('should render the button component e make snapshot', () => {
    const { container } = render(<Button label="Click me" />);
    expect(container).toMatchSnapshot();
  });

  it('should render component and use axe to check accessibility', async () => {
    const { container } = render(<Button label="Click me" />);
    const results = await axe(container); // Use a função axe para verificar a acessibilidade
    expect(results.violations.length).toBe(0); // Verifique se não há violações de acessibilidade
  });

});
