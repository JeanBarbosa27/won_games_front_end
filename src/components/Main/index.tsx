import * as S from './styles'

const Main = ({
  title = 'React Avançado - Boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styeld Components!',
  background = ''
}) => (
  <S.Wrapper style={{ backgroundColor: background }}>
    <S.Logo
      src="/img/logo.svg"
      alt="Image de um átomo e React Avançado ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Pessoa desenvolvendo código de programação no computador"
    />
  </S.Wrapper>
)

export default Main
