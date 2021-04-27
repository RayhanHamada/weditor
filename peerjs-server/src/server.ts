import { PeerServer } from 'peer';

const PORT = 3002;
const peerServer = PeerServer({ path: '/peer', port: PORT });

peerServer.listen(() => {
  console.log(`peerjs server running on port ${PORT}`);
});
