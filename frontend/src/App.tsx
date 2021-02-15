import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import './App.scss';
import Base from './components/Base/Base';
import Navbar from './components/Navbar/Navbar';

function App() {
  const mockState = useSelector((state: RootStateOrAny) => state.mock);
  const { selectedServer, selectedChannel } = mockState;
  const servers = mockState?.data.servers.map((server: any) => ({
    id: server.id,
    name: server.name
  }));
  const channelData = mockState?.data.servers[selectedServer];

  return (
    <div className="App">
      <Navbar selectedServer={selectedServer} servers={servers} />
      <Base channelData={channelData} />
    </div>
  );
}

export default App;
