import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { axe } from 'jest-axe';

describe('Button component', () => {
  it('should render correctly with default props', () => {
    const { getByText } = render(<Button label="Click me" />);
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn btn-primary');
  });

  it('should render as primary button when primary prop is true', () => {
    const { getByText } = render(<Button label="Primary Button"  variant='primary' />);
    const button = getByText('Primary Button');
    expect(button).toHaveClass('btn btn-primary');
  });

  it('should render as secondary button when secondary prop is true', () => {
    const { getByText } = render(<Button label="Secondary Button" variant='secondary' />);
    const button = getByText('Secondary Button');
    expect(button).toHaveClass('btn btn-secondary');
  });

  it('should render as warning button when warning prop is true', () => {
    const { getByText } = render(<Button label="Warning Button" variant='warning' />);
    const button = getByText('Warning Button');
    expect(button).toHaveClass('btn btn-warning');
  });

  it('should render as danger button when danger prop is true', () => {
    const { getByText } = render(<Button label="Danger Button" variant='danger' />);
    const button = getByText('Danger Button');
    expect(button).toHaveClass('btn btn-danger');
  });

  it('should render as success button when success prop is true', () => {
    const { getByText } = render(<Button label="Success Button" variant='success' />);
    const button = getByText('Success Button');
    expect(button).toHaveClass('btn btn-success');
  });

  it('should render as info button when info prop is true', () => {
    const { getByText } = render(<Button label="Info Button" variant='info' />);
    const button = getByText('Info Button');
    expect(button).toHaveClass('btn btn-info');
  });

  it('should render as light button when light prop is true', () => {
    const { getByText } = render(<Button label="Light Button" variant='light' />);
    const button = getByText('Light Button');
    expect(button).toHaveClass('btn btn-light');
  });

  it('should render as dark button when dark prop is true', () => {
    const { getByText } = render(<Button label="Dark Button" variant='dark' />);
    const button = getByText('Dark Button');
    expect(button).toHaveClass('btn btn-dark');
  });

  it('should render as button when outline-primary prop true', () => {
    const { getByText } = render(<Button label="outline primary" outline />);
    const button = getByText('outline primary');
    expect(button).toHaveClass('btn btn-outline-primary');
  });

  it('should render as button when outline-secondary prop true', () => {
    const { getByText } = render(<Button label="outline secondary" outline variant='secondary' />);
    const button = getByText('outline secondary');
    expect(button).toHaveClass('btn btn-outline-secondary');
  });

  it('should render as button when outline-warning prop true', () => {
    const { getByText } = render(<Button label="outline warning" outline variant='warning' />);
    const button = getByText('outline warning');
    expect(button).toHaveClass('btn btn-outline-warning');
  });

  it('should render as button when outline-danger prop true', () => {
    const { getByText } = render(<Button label="outline danger" outline variant='danger' />);
    const button = getByText('outline danger');
    expect(button).toHaveClass('btn btn-outline-danger');
  });

  it('should render as button when outline-success prop true', () => {
    const { getByText } = render(<Button label="outline success" outline variant='success' />);
    const button = getByText('outline success');
    expect(button).toHaveClass('btn btn-outline-success');
  });

  it('should render as button when outline-info prop true', () => {
    const { getByText } = render(<Button label="outline info" outline variant='info' />);
    const button = getByText('outline info');
    expect(button).toHaveClass('btn btn-outline-info');
  });

  it('should render as button when outline-light prop true', () => {
    const { getByText } = render(<Button label="outline light" outline variant='light' />);
    const button = getByText('outline light');
    expect(button).toHaveClass('btn btn-outline-light');
  });

  it('should render as button when outline-dark prop true', () => {
    const { getByText } = render(<Button label="outline dark" outline variant='dark' />);
    const button = getByText('outline dark');
    expect(button).toHaveClass('btn btn-outline-dark');
  });

  it('should render as small button when small prop is true', () => {
    const { getByText } = render(<Button label="Small Button" size='sm' />);
    const button = getByText('Small Button');
    expect(button).toHaveClass('btn btn-primary btn-sm');
  });

  it('should render as large button when large prop is true', () => {
    const { getByText } = render(<Button label="Large Button" size='lg' />);
    const button = getByText('Large Button');
    expect(button).toHaveClass('btn btn-primary btn-lg');
  });

  it('should render as disabled button when disabled prop is true', () => {
    const { getByText } = render(<Button label="Disabled Button" disabled />);
    const button = getByText('Disabled Button');
    expect(button).toHaveClass('btn btn-primary');
    expect(button).toBeDisabled();
  });

  it('should render as button with type submit when type prop is submit', () => {
    const { getByText } = render(<Button label="Submit Button" type='submit' />);
    const button = getByText('Submit Button');
    expect(button).toHaveClass('btn btn-primary');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should render as button with type reset when type prop is reset', () => {
    const { getByText } = render(<Button label="Reset Button" type='reset' />);
    const button = getByText('Reset Button');
    expect(button).toHaveClass('btn btn-primary');
    expect(button).toHaveAttribute('type', 'reset');
  });

  it('should render component when onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should render the button component e make snapshot', () => {
    const { container } = render(<Button label="Click me" />);
    expect(container).toMatchSnapshot();
  });

  it('should render component and use axe to check accessibility', async () => {
    const { container } = render(<Button label="Click me" />);
    const results = await axe(container);
    expect(results.violations.length).toBe(0);
  });

});
