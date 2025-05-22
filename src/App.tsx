import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';
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
              <Input labelText='Task' 
              labelProps={{ style: { fontSize: '2.5rem' } }} 
              id='defaultInput' 
              type='text'
              placeholder='Digite sua task'
              />
            </FormHome> 
      </Container>
      <Container>
            <Footer/>
      </Container>
    </>
  );
}
