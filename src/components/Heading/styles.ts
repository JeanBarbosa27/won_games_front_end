import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  leftLine: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  bottomLine: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.xxsmall};

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, leftLine, bottomLine }) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    color: ${!!color && theme.colors[color]};
    ${leftLine && wrapperModifiers.leftLine(theme)};
    ${bottomLine && wrapperModifiers.bottomLine(theme)};
  `}
`
