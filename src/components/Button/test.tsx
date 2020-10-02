import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should be able to render Button componente', () => {
    renderWithTheme(<Button />)
    const heading = screen.getByRole('heading', { name: /Button/i })

    expect(heading).toBeInTheDocument()
  })
})
