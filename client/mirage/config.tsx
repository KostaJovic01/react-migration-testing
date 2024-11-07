// mirage/server.js
import {Inquiries} from './routes/Inquiries';
import {createServer} from 'miragejs';

export function startMirageServer() {
  const server = createServer({
    routes() {
      this.namespace = 'api';
      Inquiries(this);
    },
  });

  return server;
}
