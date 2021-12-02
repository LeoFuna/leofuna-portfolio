import React from "react";
import { render, screen } from "@testing-library/react";
import ContactIcons from '../Components/ContactIcons';


describe('Testa os elementos do ContactIcons', () => {
  it('há pelo menos 3 containers de icones para contato', () => {
    render(<ContactIcons />)
    const greetingsContainer = screen.getByTestId('icons-container')
    expect(greetingsContainer.children.length).toBeGreaterThan(2)
  })
  it('há os contatos de Github e Linkedin', () => {
    render(<ContactIcons />)
    const github = screen.getByText('Github')
    const linkedin = screen.getByText('Linkedin')
    expect(github).toBeInTheDocument()
    expect(linkedin).toBeInTheDocument()
  })
  it('há um href para o github e para o linkedin', () => {
    render(<ContactIcons />)
    // https://stackoverflow.com/questions/57827126/how-to-test-anchors-href-with-react-testing-library
    const githubATag = screen.getByText('Github').closest('a')
    const linkedinATag = screen.getByText('Linkedin').closest('a')
    expect(githubATag).toHaveAttribute('href', 'https://github.com/LeoFuna')
    expect(linkedinATag).toHaveAttribute('href', 'https://www.linkedin.com/in/leonardofunabashi/')
  })
});