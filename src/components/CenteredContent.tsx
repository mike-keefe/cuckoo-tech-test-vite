import React from "react";
import styled from "styled-components";

const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  line-height: 30pt;
`;

export default function CenteredContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContentWrapper>
      <div>{children}</div>
    </PageContentWrapper>
  );
}
