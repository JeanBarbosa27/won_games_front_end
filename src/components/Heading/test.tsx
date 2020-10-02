import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should be render white color by default', () => {
    renderWithTheme(<Heading>Most Popular</Heading>)
    expect(screen.getByText(/most popular/i)).toHaveStyle({ color: '#fafafa' })
  })

  it('should be render black color when it is passed', () => {
    renderWithTheme(<Heading color="black">Most Popular</Heading>)
    expect(screen.getByText(/most popular/i)).toHaveStyle({ color: '#030517' })
  })

  it('should be render a green left line when it is passed', () => {
    renderWithTheme(<Heading leftLine>Most Popular</Heading>)
    expect(screen.getByText(/most popular/i)).toHaveStyle({
      paddingLeft: '0.8rem',
      borderLeft: '0.7rem solid #3CD3C1'
    })
  })

  it('should be render a pint bottom line when it is passed', () => {
    renderWithTheme(<Heading bottomLine>Most Popular</Heading>)
    expect(screen.getByText(/most popular/i)).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
