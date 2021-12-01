import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../Components/About";

describe('Testa os elementos do About', () => {
  it('há um título Sobre', () => {
    render(<About />)
    const aboutContainer = screen.getByTestId('about-container')
    expect(aboutContainer.children[0].innerHTML).toBe('Sobre')
  })
  it('há, além do título, 2 textos relativos aos detalhes', () => {
    render(<About />)
    const aboutContainer = screen.getByTestId('about-container')
    expect(aboutContainer.children.length).toBe(3)
  })
});