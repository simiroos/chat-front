import { MessageInFrontend } from '~repositories/message';
import style from './Message.module.scss';
import image from './images/user.svg';

interface IMessageProps {
  message: MessageInFrontend;
}

export default function Message(props: IMessageProps) {
  const {
    message: { username, body, self },
  } = props;

  return (
    <div className={`${style.container} ${self ? style.self : ''}`}>
      <div className={style.picture}>
        <img
          src={image}
          alt=""
        />
      </div>
      <div className={style.contentContainer}>
        <div className={style.name}>{username}</div>
        <div className={style.message}>{body}</div>
      </div>
    </div>
  );
}
