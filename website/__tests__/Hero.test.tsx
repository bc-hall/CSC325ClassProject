import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'
import { it } from 'node:test'


describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })

  it('renders other text', () => {
    render(<Hero />)

    const text = screen.getByRole('heading', {level: 4})
    expect(text).toBeInTheDocument()
  })

  it('renders a button', () => {
    render(<Hero />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('renders an image', () => {
    render(<Hero />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
})