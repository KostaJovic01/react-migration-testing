// mirage/server.js
import {Inquiries} from './routes/Inquiries';
import {User} from './routes/User';

import {createServer} from 'miragejs';

export function startMirageServer() {
  const server = createServer({
    routes() {
      this.namespace = 'api';
      Inquiries(this);
      User(this);
    },
  });

  return server;
}
