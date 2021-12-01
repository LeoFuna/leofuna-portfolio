import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Components/Header";


describe('Testa os elementos do Header', () => {
  test('há o hamburger menu', () => {
    render(<Header />);
    const hamburgerMenu = screen.getByTestId('hamburger-menu');
    expect(hamburgerMenu).toBeInTheDocument();
  });

  test('há o nome', () => {
    render(<Header />);
    const nameElement = screen.getByText('Leonardo Funabashi');
    expect(nameElement).toBeInTheDocument();
  });

  test('há logo', () => {
    render(<Header />);
    const logoElement = screen.getByText('船橋');
    expect(logoElement).toBeInTheDocument();
  });

  test('Side-bar nao visível inicialmente mas depois visível', () => {
    render(<Header />);
    const navElement = screen.getByTestId('nav-menu');
    const hamburgerMenu = screen.getByTestId('hamburger-menu');
    expect(navElement).not.toHaveClass('visible');
    userEvent.click(hamburgerMenu);
    expect(navElement).toHaveClass('visible');
    const homeElement = screen.getByText('Início');
    const projectsElement = screen.getByText('Projetos');
    const contactElement = screen.getByText('Contato');
    expect(navElement.firstChild.childElementCount).toBe(3);
    expect(homeElement).toBeInTheDocument();
    expect(projectsElement).toBeInTheDocument();
    expect(contactElement).toBeInTheDocument();
  });
});