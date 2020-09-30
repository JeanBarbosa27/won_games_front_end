import { render, screen } from '@testing-library/react'

import Main from '.'
// import { colors } from 'styles/variables'

describe('<Main />', () => {
  it('should be able to render Main componente', () => {
    const { container } = render(<Main />)
    const heading = screen.getByRole('heading', { name: /react avançado/i })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyleRule('background-color', '#06092b')
  })
})
