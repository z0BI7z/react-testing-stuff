import React from 'react';
import styled from 'styled-components';
import Importer from './components/Importer';
import LastAction from './components/last-action';
import Rerender from './components/Rerender';
import TimedCounter from './components/TimedCounter';
import ToggleModal from './components/ToggleModal';
import ReduxProvider from './redux/provider';

const AppContainer = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  padding: 1rem;
`;

const App: React.FC = () => {
  return (
    <ReduxProvider>
      <AppContainer>
        <ToggleModal />
        <TimedCounter />
        <Rerender />
        <Importer />
        <LastAction />
      </AppContainer>
    </ReduxProvider>
  );
};

export default App;
