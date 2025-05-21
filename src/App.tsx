import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { FormHome } from './components/FormHome';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
            <Logo/>
      </Container>
      <Container>
            <Menu/>
      </Container>
      <Container>
            <CountDown/>
      </Container>
      <Container>
           <FormHome>
              <Input id='defaultInput' type='text'/>
            </FormHome> 
      </Container>
    </>
  );
}
