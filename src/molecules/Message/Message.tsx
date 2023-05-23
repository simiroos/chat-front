import style from './Message.module.scss';
import image from './images/user.svg';

interface IMessageProps {
  message: {
    from: string;
    message: string;
    self: boolean;
  };
}

export default function Message(props: IMessageProps) {
  const {
    message: { from, message, self },
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
        <div className={style.name}>{from}</div>
        <div className={style.message}>{message}</div>
      </div>
    </div>
  );
}
