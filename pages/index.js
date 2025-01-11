import Head from 'next/head';
import dotenv from 'dotenv';
import styled from 'styled-components';
dotenv.config();
import { ModifyCssContainer } from '../modify-css/modify-css-container/ModifyCssContainer';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  margin: 0 auto;
  padding: 2rem 1rem 0;
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
        <h1 style={{ textAlign: 'left', paddingLeft: '30px' }}>
          AI CSS Generator
        </h1>
        <ModifyCssContainer />
      </MainContent>
    </PageContainer>
  );
}
