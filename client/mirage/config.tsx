// mirage/server.js
import {Inquiries} from './routes/Inquiries';
import {User} from './routes/User';
import {inquiries} from './fixtures/Inquiries';
import {createServer, Model} from 'miragejs';

export function startMirageServer() {
  const server = createServer({
    models: {
      inquiries: Model,
    },
    seeds(server) {
      server.db.loadData({inquiries});
    },
    routes() {
      this.namespace = 'api';
      Inquiries(this);
      User(this);
    },
  });

  return server;
}
