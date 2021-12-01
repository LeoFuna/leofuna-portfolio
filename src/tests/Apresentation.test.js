import React from "react";
import { render, screen } from "@testing-library/react";
import Apresentation from "../Components/Apresentation";

describe('Testa os elementos do Apresentation', () => {
  test('há uma imagem principal de avatar', () => {
    render(<Apresentation />);
    const heroImage = screen.getByAltText('My personal photo');
    expect(heroImage).toBeInTheDocument();
  });
  test('há uma hero de apresentação', () => {
    render(<Apresentation />);
    const heroApresentation = screen.getByText('Oi! Eu sou o Funa!');
    expect(heroApresentation).toBeInTheDocument();
  });
  test('há breve texto descritivo', () => {
    render(<Apresentation />);
    const firstText = screen.getByText('Sou um estudante de desenvolvimento web na Trybe');
    const secondText = screen.getByText('Agradeço à visita ao meu portfólio de projetos!');
    expect(firstText).toBeInTheDocument();
    expect(secondText).toBeInTheDocument();
  });
});