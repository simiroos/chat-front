import { useState } from 'react';
import style from './ChatView.module.scss';
import Message from '../../molecules/Message/Message';

export default function ChatView() {
  const [messages, setMessages] = useState([
    { from: 'Peter', message: 'Hello there nerd', self: false },
    { from: 'Wouter', message: 'You are!', self: true },
  ]);

  return (
    <div className={style.container}>
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
}
