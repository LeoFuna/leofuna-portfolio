import React from "react";
import { render, screen } from "@testing-library/react";
import ContactGreetings from '../Components/ContactGreetings';


describe('Testa os elementos do ContactGreetings', () => {
  it('há dois textos de apresentação', () => {
    render(<ContactGreetings />)
    const greetingsContainer = screen.getByTestId('greetings-container')
    expect(greetingsContainer.children.length).toBe(2)
    expect(greetingsContainer.firstChild.innerHTML).toMatch(/Funa/)
    expect(greetingsContainer.lastChild.innerHTML).toBe('Por onde iremos nos conectar?')
  })
});