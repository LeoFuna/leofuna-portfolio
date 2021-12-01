import React from "react";
import { render, screen } from "@testing-library/react";
import Topics from "../Components/Topics";

describe('Testa os elementos do Topics', () => {
  it('há 2 seções', () => {
    render(<Topics />)
    const topicsContainer = screen.getByTestId('topics-container')
    expect(topicsContainer.children.length).toBe(2)
  })
  it('a primeira seção possui o título de Interesses', () => {
    render(<Topics />)
    const topicsContainer = screen.getByTestId('topics-container')
    expect(topicsContainer.firstChild.firstChild.innerHTML).toBe('Interesses')
  })
  it('a segunda seção possui o título de Hard Skills', () => {
    render(<Topics />)
    const topicsContainer = screen.getByTestId('topics-container')
    expect(topicsContainer.lastChild.firstChild.innerHTML).toBe('Hard Skills')
  })
  it('a primeira seção possui uma lista', () => {
    render(<Topics />)
    const topicsContainer = screen.getByTestId('topics-container')
    expect(topicsContainer.firstChild.lastChild.nodeName).toBe('UL')
  })
  it('a primeira seção possui uma lista', () => {
    render(<Topics />)
    const topicsContainer = screen.getByTestId('topics-container')
    expect(topicsContainer.lastChild.lastChild.nodeName).toBe('UL')
  })
});