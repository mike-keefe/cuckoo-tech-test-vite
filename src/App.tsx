import { useState } from "react";
import reactLogo from "./assets/react.svg";
import PageContainer from "./components/PageWrapper";
import PageContent from "./components/ContentContainer";
import PageFooter from "./components/Footer";
import PageHeader from "./components/Header";
import CenteredWrapper from "./components/CenteredWrapper";
import CenteredContent from "./components/CenteredContent";
import Button from "./components/Button";

function App() {
  return (
    <PageContainer>
      <PageHeader>
        <CenteredWrapper>
          <h1>Otter</h1>
        </CenteredWrapper>
      </PageHeader>
      <PageContent>
        <CenteredContent>
          <p>The new way to happiness is through Otter!</p>
          <p>Be the first to know when we launch</p>
          <Button onClick={() => {}}>Request an invite</Button>
        </CenteredContent>
      </PageContent>
      <PageFooter>
        <CenteredWrapper>
          <p>Made with ❤️ in Catford</p>
          <p>Copyright 2020 Otter Limited</p>
        </CenteredWrapper>
      </PageFooter>
    </PageContainer>
  );
}

export default App;
