import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';

import {
  createTranscriptionRoute,
  generateAiCompletionRoute,
  getAllPromptsRoute,
  uploadVideoRoute,
} from './routes';

const app = fastify();

app.register(fastifyCors, {
  origin: '*', // Replace to vercel domain after deploy
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAiCompletionRoute);

app
  .listen({
    port: 3333,
    host: '0.0.0.0'
  })
  .then(() => console.log('HTTP Server Running'))
  .catch((err) => console.error(err));
