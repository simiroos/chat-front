import style from './Header.module.scss';
import image from './images/share.svg';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.group}>Game Group</div>
      <div className={style.share}>
        <button
          type="button"
          className={style.share}
        >
          <img
            src={image}
            width="24"
            alt="share"
          />
        </button>
      </div>
    </div>
  );
}
