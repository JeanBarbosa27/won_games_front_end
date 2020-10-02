import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  leftLine?: boolean
  bottomLine?: boolean
}

const Heading = ({
  children,
  color = 'white',
  leftLine = false,
  bottomLine = false
}: HeadingProps) => (
  <S.Wrapper color={color} leftLine={leftLine} bottomLine={bottomLine}>
    {children}
  </S.Wrapper>
)

export default Heading
