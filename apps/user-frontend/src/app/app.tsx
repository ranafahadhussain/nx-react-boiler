import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { darkTheme, globalStyles , ThemeToggle } from '@tote/ui';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  globalStyles()
  return (
    <StyledApp>
      <ThemeToggle />
      <NxWelcome title="user-frontend" />
    </StyledApp>
  );
}

export default App;
