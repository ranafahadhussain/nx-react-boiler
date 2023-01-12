import styled from 'styled-components';
import { darkTheme, globalStyles , Spinner, ThemeToggle } from '@tote/ui';
import { RouterProvider } from "react-router-dom";
import routes from './routing/Routes';
import React, { Suspense } from "react";
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  globalStyles()
  return (
    <StyledApp>
      <Suspense fallback =  { <Spinner />}>
        <RouterProvider router={routes} />     
      </Suspense>
      {/* <Spinner size = {'xs'} />
      <ThemeToggle />
      <NxWelcome /> */}
    </StyledApp>
  );
}

export default App;
