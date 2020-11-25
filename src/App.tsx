import React from 'react';
import styled from 'styled-components';
import ToggleModal from './components/ToggleModal';
import TimedCounter from './components/TimedCounter';
import Rerender from './components/Rerender';

const AppContainer = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  padding: 1rem;
`;

function App() {
  return (
    <AppContainer>
      <ToggleModal />
      <TimedCounter />
      <Rerender />
    </AppContainer>
  );
}

export default App;
