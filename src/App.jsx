import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background: #0d0d0d;
  height: 100vh;
`;

export default App;
