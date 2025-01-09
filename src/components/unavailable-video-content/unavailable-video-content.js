import styles from './unavailable-video-content.module.css';

export default function UnavailableVideoContent() {
  return (
    <div className={styles['unavailable-content-wrapper']}>
      {/* <h3>Content is Unavailable</h3> */}
      <div className={styles['notify-description']}>
        This content is currently unavailable. Click the button below to be notified when it becomes
        available.
      </div>
      <a
        className={styles['notify-button']}
        href={'https://t.me/neon_notifier_bot?start=' + encodeURIComponent(window.location.href)}
        target='_blank'
        rel='noreferrer'
      >
        Notify Me
      </a>
    </div>
  );
}
