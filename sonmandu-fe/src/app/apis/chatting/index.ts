import { instanceJsonContent } from 'apis/_instance';

export async function getPreviousMessage() {
  return await instanceJsonContent.get('/chat');
}
