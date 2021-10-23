import React from 'react';
import { Container, Button } from '../globals.styled';
import * as S from './InfoSection.styled'

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <React.Fragment>
      <S.InfoSec lightBg={lightBg}>
        <Container>
          <S.InfoRow imgStart={imgStart}>
            <S.InfoColumn>
              <S.TextWrapper>
                <S.TopLine lightTopLine={lightTopLine}>{topLine}</S.TopLine>
                <S.Heading lightText={lightText}>{headline}</S.Heading>
                <S.Subtitle lightTextDesc={lightTextDesc}>{description}</S.Subtitle>
                <a >
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              </S.TextWrapper>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.ImgWrapper start={start}>
                <S.Img src={img} alt={alt} />
              </S.ImgWrapper>
            </S.InfoColumn>
          </S.InfoRow>
        </Container>
      </S.InfoSec>
    </React.Fragment>
  );
}

export default InfoSection;
