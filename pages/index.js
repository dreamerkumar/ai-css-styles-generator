import Head from 'next/head';
import dotenv from 'dotenv';
import styled from 'styled-components';
dotenv.config();
import { ModifyCssDialog } from '../modify-css/modify-css-dialog/ModifyCssDialog';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%);
  color: white;
  padding: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 600;
    letter-spacing: -0.02em;
  }
`;

export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <MainContent>
        <h1>
          AI CSS Generator
        </h1>
        <ModifyCssDialog />
      </MainContent>
    </PageContainer>
  );
}
