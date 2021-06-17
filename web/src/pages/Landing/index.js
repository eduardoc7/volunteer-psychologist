import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/images/landing.svg';
import pacienteIcon from '../../assets/images/icons/paciente.svg';
import psicologoIcon from '../../assets/images/icons/psicologo.svg';
import api from '../../services/api.ts';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <h1>Volunteer Psychologist</h1>
          <h2>Seu momento de terapia é aqui!</h2>
        </div>

        <img
          src={landingImg}
          alt="Hero"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/paciente" className="paciente">
            <img src={pacienteIcon} alt="Sou Paciente" />
            Sou Paciente
          </Link>

          <Link to="/cadastro-psicologo" className="cadastro-psicologo">
            <img src={psicologoIcon} alt="Sou Psicólogo" />
            Sou Psicólogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
