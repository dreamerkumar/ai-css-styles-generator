import Head from 'next/head';
import dotenv from 'dotenv';
import styled from 'styled-components';
dotenv.config();
import { ModifyCssDialog } from '../modify-css/modify-css-dialog/ModifyCssDialog';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 0;
`;

export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>AI CSS Generator</title>
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
