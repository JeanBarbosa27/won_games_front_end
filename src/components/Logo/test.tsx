import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should be able to render Logo componente', () => {
    const { container } = render(<Logo />)
    const heading = screen.getByRole('heading', { name: /Logo/i })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
