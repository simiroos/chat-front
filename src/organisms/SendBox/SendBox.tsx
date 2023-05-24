import { useRef, useState } from 'react';
import { MessageInBackend, createMessage } from '~repositories/message';
import style from './SendBox.module.scss';
import send from './images/send.svg';

interface SendBoxProps {
  setMessages: (messages: MessageInBackend[]) => void;
  userName: string;
  setUserName: (newName: string) => void;
}

export default function SendBox(props: SendBoxProps) {
  const { userName, setUserName, setMessages } = props;

  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName.length < 2) return;
    if (message.length < 1) return;

    const sendMessage = async () => {
      setDisabled(true);
      const newMessages = await createMessage({ username: userName, body: message });
      setMessages(newMessages);

      setMessage('');
      setDisabled(false);
      if (inputRef.current) inputRef.current.focus();
    };

    sendMessage();
  };

  return (
    <>
      <div className={style.spacer} />
      <div className={style.inputContainer}>
        <form onSubmit={submit}>
          <input
            disabled={disabled}
            className={`${style.input} ${style.user}`}
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            placeholder="User name"
          />
          <input
            disabled={disabled}
            ref={inputRef}
            className={`${style.input} ${style.message}`}
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message"
          />
          <button
            className={style.submit}
            disabled={disabled || userName.length < 2 || message.length < 1}
            type="submit"
            value="Send"
          >
            <img
              src={send}
              alt="Send"
            />
          </button>
        </form>
      </div>
    </>
  );
}
