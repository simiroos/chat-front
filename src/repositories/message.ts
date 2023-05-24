export interface MessageInBackend {
  username: string;
  body: string;
  id: string;
}

export interface MessageInFrontend {
  username: string;
  body: string;
  self: boolean;
  id: string;
}

const failed = [{ username: 'system', body: 'något gick fel :(', id: 'failure' }];

export const getMessages = async () => {
  try {
    const response = await fetch('http://localhost:4001/api/messages');
    if (response.status !== 200) return failed;

    const body: MessageInBackend[] = await response.json();
    return body;
  } catch (error) {
    console.log(error);
    return failed;
  }
};

export const createMessage = async (message: { username: string; body: string }) => {
  try {
    const response = await fetch('http://localhost:4001/api/messages', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    if (response.status !== 200) return failed;

    const body: MessageInBackend[] = await response.json();
    return body;
  } catch (error) {
    console.log(error);
    return failed;
  }
};
