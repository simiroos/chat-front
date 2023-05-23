import { useRef, useState } from 'react';
import style from './SendBox.module.scss';
import send from './images/send.svg';

export default function SendBox() {
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user.length < 2) return;
    if (message.length < 1) return;

    const sendMessage = async () => {
      setDisabled(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

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
            value={user}
            onChange={(event) => setUser(event.target.value)}
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
            disabled={disabled || user.length < 2 || message.length < 1}
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
