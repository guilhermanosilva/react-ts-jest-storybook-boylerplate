import * as S from './styles'

export const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS, Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e react avançado escrito ao lado"
    />

    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para um tela com código"
    />
  </S.Wrapper>
)
