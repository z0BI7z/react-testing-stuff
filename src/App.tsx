import React from 'react';
import styled from 'styled-components';
import ToggleModal from './components/ToggleModal';
import TimedCounter from './components/TimedCounter';
import Rerender from './components/Rerender';
import Importer from './components/Importer';

const AppContainer = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  padding: 1rem;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ToggleModal />
      <TimedCounter />
      <Rerender />
      <Importer />
    </AppContainer>
  );
};

export default App;
