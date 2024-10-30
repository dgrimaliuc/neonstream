import { Player } from '../player';
import classes from './modal.module.css';
import Modal from './modal';
import { Close } from '../icons';
import { getYoutubeUrl } from '../../api';

export default function TrailerModal({ onOutsideClick, trailer }) {
  return (
    <>
      <Modal className={classes['trailer-modal']} onOutsideClick={onOutsideClick} show={!!trailer}>
        <div className={classes['player-header']}>
          <h4>{trailer?.name}</h4>
          <div className={classes['modal-close']} onClick={onOutsideClick}>
            <Close />
          </div>
        </div>
        <Player
          className={classes['non-interactive-card']}
          url={getYoutubeUrl(trailer?.key)}
          controls={true}
          playing={true}
        />
      </Modal>
    </>
  );
}
