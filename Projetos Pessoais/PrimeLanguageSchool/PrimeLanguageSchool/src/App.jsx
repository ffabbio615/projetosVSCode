import { useState } from 'react'
import './App.scss'
import Header from './components/Header';
import S1Proposal from './components/S1Proposal';
import S2Presentation from './components/S2Presentation';
import S3Services from './components/S3Services';
import S4Testimonials from './components/S4Testimonial';
import S5ProposalLocation from './components/S5ProposalLocation';
import S6Faq from './components/S6Faq';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header> </Header>
      
      <S1Proposal></S1Proposal>

      <S2Presentation></S2Presentation>

      <S3Services></S3Services>

      <S4Testimonials></S4Testimonials>

      <S5ProposalLocation></S5ProposalLocation>

      <S6Faq></S6Faq>

      <Footer></Footer>

    </>
  );
}

export default App