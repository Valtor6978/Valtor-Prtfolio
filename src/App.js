import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'
import WhyMe from './Sections/WhyMe/WhyMe';
import ProcessSec from './Sections/ProcessSec/ProcessSec'
import StylesSec from './Sections/StylesSec/StylesSec';
import Tools from './Sections/Tools/Tools'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container >
    <Header />
    <Hero />
    <WhyMe />
    <ProcessSec />
    <StylesSec />
    <Tools />
    </Container>
  );
}

export default App;
