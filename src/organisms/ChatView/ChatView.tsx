import { MessageInFrontend } from '~repositories/message';
import { useEffect } from 'react';
import style from './ChatView.module.scss';
import Message from '../../molecules/Message/Message';

interface ChatViewProps {
  messages: MessageInFrontend[];
}

export default function ChatView({ messages }: ChatViewProps) {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages]);

  return (
    <div className={style.container}>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}
