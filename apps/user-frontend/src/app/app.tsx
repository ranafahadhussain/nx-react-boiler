import {
  darkTheme,
  globalStyles,
  Spinner,
  ThemeToggle,
  styled,
  Modal,
} from '@tote/ui';
import { RouterProvider } from 'react-router-dom';
import routes from './routing/Routes';
import React, { Suspense } from 'react';
import Header from './components/Header';

const StyledApp = styled('div', {
  paddingTop: '100px',
});

export function App() {
  globalStyles();
  return (
    <StyledApp>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={routes} />
      </Suspense>
      {/* <Spinner size = {'xs'} />
      <ThemeToggle />
      <NxWelcome /> */}
      <Header />

      <Modal title="demo" active={false}></Modal>
    </StyledApp>
  );
}

export default App;
