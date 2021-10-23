import React from 'react';
import { Button } from '../globals.styled';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import * as S from './Footer.styled'

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterSubscription>
        <S.FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </S.FooterSubHeading>
        <S.FooterSubText>You can unsubscribe at any time.</S.FooterSubText>
        <S.Form>
          <S.FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </S.Form>
      </S.FooterSubscription>
      <S.FooterLinksContainer>
        <S.FooterLinksWrapper>
          <S.FooterLinkItems>
            <S.FooterLinkTitle>About Us</S.FooterLinkTitle>
            <S.FooterLink to='/sign-up'>How it works</S.FooterLink>
            <S.FooterLink to='/'>Testimonials</S.FooterLink>
            <S.FooterLink to='/'>Careers</S.FooterLink>
            <S.FooterLink to='/'>Investors</S.FooterLink>
            <S.FooterLink to='/'>Terms of Service</S.FooterLink>
          </S.FooterLinkItems>
          <S.FooterLinkItems>
            <S.FooterLinkTitle>Contact Us</S.FooterLinkTitle>
            <S.FooterLink to='/'>Contact</S.FooterLink>
            <S.FooterLink to='/'>Support</S.FooterLink>
            <S.FooterLink to='/'>Destinations</S.FooterLink>
            <S.FooterLink to='/'>Sponsorships</S.FooterLink>
          </S.FooterLinkItems>
        </S.FooterLinksWrapper>
        <S.FooterLinksWrapper>
          <S.FooterLinkItems>
            <S.FooterLinkTitle>Videos</S.FooterLinkTitle>
            <S.FooterLink to='/'>Submit Video</S.FooterLink>
            <S.FooterLink to='/'>Ambassadors</S.FooterLink>
            <S.FooterLink to='/'>Agency</S.FooterLink>
            <S.FooterLink to='/'>Influencer</S.FooterLink>
          </S.FooterLinkItems>
          <S.FooterLinkItems>
            <S.FooterLinkTitle>Social Media</S.FooterLinkTitle>
            <S.FooterLink to='/'>Instagram</S.FooterLink>
            <S.FooterLink to='/'>Facebook</S.FooterLink>
            <S.FooterLink to='/'>Youtube</S.FooterLink>
            <S.FooterLink to='/'>Twitter</S.FooterLink>
          </S.FooterLinkItems>
        </S.FooterLinksWrapper>
      </S.FooterLinksContainer>
      <S.SocialMedia>
        <S.SocialMediaWrap>
          <S.SocialLogo to='/'>
            <S.SocialIcon />
            ULTRA
          </S.SocialLogo>
          <S.WebsiteRights>ULTRA © 2020</S.WebsiteRights>
          <S.SocialIcons>
            <S.SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </S.SocialIconLink>
            <S.SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </S.SocialIconLink>
            <S.SocialIconLink
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </S.SocialIconLink>
            <S.SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </S.SocialIconLink>
            <S.SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </S.SocialIconLink>
          </S.SocialIcons>
        </S.SocialMediaWrap>
      </S.SocialMedia>
    </S.FooterContainer>
  );
}

export default Footer;
