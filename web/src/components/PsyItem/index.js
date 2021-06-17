import React from 'react';

import PropTypes from 'prop-types';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function PsyItem({ psy }) {

  function contactWpp() {
    // window.location.href = "https://api.whatsapp.com/send?phone=5541984865069"
    window.open(`https://api.whatsapp.com/send?phone=55${psy.whatsapp}`)
  }

  return (
    <article className="psy-item">
      <header>
        <img src={psy.avatar} alt={psy.name} />
        <div>
          <strong>{psy.name}</strong>
          <span>{psy.subject}</span>
        </div>
      </header>

      <p>
        {psy.bio}
      </p>

      <footer>
        <a href={psy.linkedin}><span id="linkedin"></span></a>
        <a href={psy.pitch}><span id="pitch"></span></a>

        <button type="button" onClick={contactWpp}>
          <img src={wppIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}
export default PsyItem;

PsyItem.defaultProps = {
  psy: '',
};

PsyItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  psy: PropTypes.shape({
    id: PropTypes.number,
    linkedin: PropTypes.string,
    pitch: PropTypes.string,
    avatar: PropTypes.string,
    bio: PropTypes.string,
    name: PropTypes.string,
    whatsapp: PropTypes.string,
  }),
};
