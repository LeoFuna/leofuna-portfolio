import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.js';

test('Aplicação como um todo', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});
