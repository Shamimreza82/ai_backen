
import { Server } from 'socket.io';
import app, { httpServer } from './app';
import { config } from './config';
import { logger } from './utils/logger';



export const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
})





const main = async () => {
  // Socket Io server
  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, () => {
    console.log(`Socket server listening on port ${PORT}`);
  });

  // Start server
  // app.listen(config.port, () => {
  //   logger.info(`Server running in ${config.nodeEnv} mode on port ${config.port}`);
  // });


}

main();