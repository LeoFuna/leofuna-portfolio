import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Pages/Home";
import userEvent from "@testing-library/user-event";


describe('Testa os elementos do Header', () => {
  test('há o hamburger menu', () => {
    render(<Home />);
    const hamburgerMenu = screen.getByTestId('hamburger-menu');
    expect(hamburgerMenu).toBeInTheDocument();
  });

  test('há o nome', () => {
    render(<Home />);
    const nameElement = screen.getByText('Leonardo Funabashi');
    expect(nameElement).toBeInTheDocument();
  });

  test('há logo', () => {
    render(<Home />);
    const logoElement = screen.getByText('船橋');
    expect(logoElement).toBeInTheDocument();
  });

  test('Side-bar nao visível inicialmente mas depois visível', () => {
    render(<Home />);
    const navElement = screen.getByTestId('nav-menu');
    const hamburgerMenu = screen.getByTestId('hamburger-menu');
    expect(navElement).not.toHaveClass('visible');
    userEvent.click(hamburgerMenu);
    expect(navElement).toHaveClass('visible');
    const homeElement = screen.getByText('Home');
    const projectsElement = screen.getByText('Projects');
    const contactElement = screen.getByText('Contact');
    expect(navElement.firstChild.childElementCount).toBe(3);
    expect(homeElement).toBeInTheDocument();
    expect(projectsElement).toBeInTheDocument();
    expect(contactElement).toBeInTheDocument();
  });
});

describe('Testa os elementos do Apresentation', () => {
  test('há uma imagem principal de avatar', () => {
    render(<Home />);
    const heroImage = screen.getByAltText('My personal photo');
    expect(heroImage).toBeInTheDocument();
  });
  test('há uma hero de apresentação', () => {
    render(<Home />);
    const heroApresentation = screen.getByText('Hi! I\'m Funa!');
    expect(heroApresentation).toBeInTheDocument();
  });
  test('há breve texto descritivo', () => {
    render(<Home />);
    const firstText = screen.getByText('I\'m a web developer student at Trybe');
    const secondText = screen.getByText('Welcome to my project portfolio!');
    expect(firstText).toBeInTheDocument();
    expect(secondText).toBeInTheDocument();
  });
});