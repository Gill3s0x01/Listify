import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import gillesImg from '../../../assets/gilles.jpg';


import { Container, Devs, Dev, DevInfo } from './styles';

interface IAboutProps {
  showAbout: boolean;
}

const About: React.FC<IAboutProps> = ({ showAbout }) => {
  return (
    <Container showAbout={showAbout}>
      <section>
        <h1>Sobre o app</h1>
        <p className="about-text">
          Listify é uma aplicação criada a partir do
          <a
            href="https://developer.spotify.com/documentation/web-api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify’s Web API
          </a>
          para coletar informações de sua conta Spotify. Não somos, de forma
          alguma, afiliados com o Spotify.
        </p>
      </section>

      <section>
        <h3 className="privacy-title">Privacidade</h3>
        <p className="privacy-text">
          Listify requer acesso à sua conta do Spotify mas não armazena nenhum
          dado em servidor.
        </p>
      </section>

      <section>
        <h3 className="we-title">Quem somos</h3>

        <Devs showAbout={showAbout}>
          <Dev>
            <img src={gillesImg} alt="Gilles" />

            <DevInfo>
              <strong>Gilles</strong>
              <div>
                <a
                  href="https://github.com/Gilles30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/lorison-gilles/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </DevInfo>
          </Dev>
        </Devs>
      </section>
    </Container>
  );
};

export default About;
