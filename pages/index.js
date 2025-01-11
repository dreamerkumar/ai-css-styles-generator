import Head from 'next/head';
import dotenv from 'dotenv';
import styled from 'styled-components';
dotenv.config();
import { ModifyCssContainer } from '../modify-css/modify-css-container/ModifyCssContainer';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: var(--ai-spacing-small);
`;

const MainContent = styled.main`
`;

const SubText = styled.p`
  text-align: left;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  a {
    color: var(--ai-color-secondary-300);
    text-decoration: underline;
    
    &:hover {
      color: var(--ai-color-secondary-200);
    }
  }
`;

export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>AI CSS Generator</title>
        <meta name="description" content="Generate CSS styles for a div element using AI assistance. Manually edit CSS, preview changes in real-time, and copy styles to clipboard. A simple tool for creating and testing CSS styles." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <MainContent>
        <h1 style={{ textAlign: 'left' }}>
          AI CSS Generator
        </h1>
        <SubText>
          Built with ❤️ by the <a href="https://rulecms.com" target="_blank" rel="noopener noreferrer">RuleCMS</a> team. Looking for the next generation of CMS solutions? <a href="https://rulecms.com" target="_blank" rel="noopener noreferrer">Check us out</a>!
        </SubText>

        <ModifyCssContainer />
      </MainContent>
    </PageContainer>
  );
}
