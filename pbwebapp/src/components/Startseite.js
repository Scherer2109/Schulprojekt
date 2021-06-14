import React from 'react';
import styled from 'styled-components';
import BgImg from '../assets/bg-image.jpg';
import { MdKeyboardArrowRight } from 'react-icons/md';


const Section = styled.section`
  background-image: url(${BgImg});
  height: 1080px;
  width: 1920px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;

const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #000;
  line-height: 30px;
  margin-top: 58px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: #007cff;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Startseite = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Dein Ratgeber fürs Spiel <br /> Verbinde dich mit tausenden Spielern!
          </Title>
          <Desc>
          Deine Chance dich in einer tollen Community zu beteiligen!
          </Desc>
          <Button href='register' target='register'>
            <span>Registrier dich jetzt!</span>
          <MdKeyboardArrowRight />
          </Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Startseite;