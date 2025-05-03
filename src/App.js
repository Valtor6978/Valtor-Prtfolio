import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container >
    <Header />
    <Hero />
    </Container>
  );
}

export default App;
