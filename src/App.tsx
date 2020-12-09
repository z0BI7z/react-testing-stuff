import React from 'react';
import styled from 'styled-components';
import ActionObserver from './components/action-observer';
import Importer from './components/importer';
import LastAction from './components/last-action';
import Rerender from './components/rerender';
import TimedCounter from './components/timed-counter';
import ToggleModal from './components/toggle-modal';
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
        <ActionObserver />
      </AppContainer>
    </ReduxProvider>
  );
};

export default App;
