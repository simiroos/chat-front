import { useCallback, useEffect, useState } from 'react';
import Header from '../molecules/Header/Header';
import './reset.css';
import './App.module.scss';
import ChatView from '../organisms/ChatView/ChatView';
import SendBox from '../organisms/SendBox/SendBox';
import { MessageInBackend, MessageInFrontend, getMessages } from '~repositories/message';

function App() {
  const [messages, setMessages] = useState<MessageInFrontend[]>([]);
  const [userName, setUserName] = useState('');

  const setNewMessages = useCallback(
    (newMessages: MessageInBackend[]) => {
      const parsedMessages: MessageInFrontend[] = newMessages.map((message) => ({
        ...message,
        self: message.username === userName,
      }));

      setMessages(parsedMessages);
    },
    [userName],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const getAndSet = async () => {
        const newMessages = await getMessages();
        setNewMessages(newMessages);
      };
      getAndSet();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [setNewMessages]);

  return (
    <div>
      <Header />
      <ChatView messages={messages} />
      <SendBox
        setMessages={setNewMessages}
        userName={userName}
        setUserName={setUserName}
      />
    </div>
  );
}
export default App;
