import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link 
          href="http://instagram.com/ashwestwrites" 
          rel="noreferrer noopener" 
          target="_blank"
        >
          Instagram
        </Styled.Link>
        <Styled.Link
          href="https://twitter.com/ashwestwrites"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        <Styled.Link
          href="https://www.goodreads.com/ashwestwrites"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        <Styled.Link
          href="www.linkedin.com/in/ashwestwrites"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn
        </Styled.Link>


        
        <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          Behance
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
