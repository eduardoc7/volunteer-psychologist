import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import backIcon from '../../assets/images/icons/back2.svg';
import Logo from '../../assets/images/logo2.svg';
import './styles.css';

export default function PageHeader({ title, description, children }) {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={Logo} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </div>
    </header>
  );
}

PageHeader.defaultProps = {
  description: '',
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  description: PropTypes.string,
};
