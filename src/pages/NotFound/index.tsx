import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import notfoundmoon from '../../assets/notfoundmoon.png';
import { MainTemplate } from '../../templates/Maintemplates';

import styles from './styles.module.css'

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <h1>🌙 Sincronize Seu Foco com a Lua: Pomodoro Lunar</h1>
          <p>
            Parece que esta página ainda não foi iluminada pela nossa lua! Mas
            não se preocupe, o universo da produtividade está bem aqui.
          </p>
          ---
          <div className={styles.image}>
            <img src={notfoundmoon} alt='Imagem404' />
          </div>
          <h2>Um Brilho de Foco no Seu Dia</h2>
          <p>
            Assim como as fases da lua guiam a natureza, nosso Pomodoro Lunar
            está aqui para guiar seu <strong>foco</strong> e sua{' '}
            <strong>produtividade</strong>. Às vezes, até a lua se esconde atrás
            das nuvens, e páginas como esta podem sumir por um instante. Mas
            cada fase tem sua beleza e propósito, e cada ciclo de Pomodoro te
            leva mais perto dos seus objetivos.
          </p>
          <p>
            Relaxe, respire fundo e permita que a calma da noite guie sua mente.
            O ciclo Pomodoro é seu farol, te ajudando a navegar pelas tarefas
            com <strong>disciplina</strong> e <strong>serenidade</strong>.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
