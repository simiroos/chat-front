import { MessageInFrontend } from '~repositories/message';
import style from './ChatView.module.scss';
import Message from '../../molecules/Message/Message';

interface ChatViewProps {
  messages: MessageInFrontend[];
}

export default function ChatView({ messages }: ChatViewProps) {
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
