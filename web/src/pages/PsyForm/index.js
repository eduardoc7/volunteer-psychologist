import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/danger.svg';

import api from '../../services/api.ts';

import './styles.css';

function PsyForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [pitch, setPitch] = useState('');
  const [bio, setBio] = useState('');


  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' },

    ]);
  }

  function handleCreatePsy(e) {
    e.preventDefault();

    api.post('users', {
      name,
      avatar,
      whatsapp,
      bio,
      linkedin,
      pitch,
    }).then(() => {
      alert('sucesso!');

      history.push('/');
    }).catch(() => {
      alert('erro');
    });

    // eslint-disable-next-line no-console
    console.log({
      name,
      avatar,
      whatsapp,
      linkedin,
      pitch,
      bio,
    });
  }

  function setScheduleItemValue(position, field, value) {
    const updateScheduleItem = scheduleItems.map((item, index) => {
      if (index === position) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setScheduleItems(updateScheduleItem);
  }

  return (
    <div id="page-psy-form" className="container">
      <PageHeader
        title="Cadastro Psicólogo"
        description="O primeiro passo é preencher esse formulário de inscrição!"
      />

      <main>
        <form onSubmit={handleCreatePsy}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => { setName(e.target.value); }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value); }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value); }}
            />
            <Input
              name="linkedin"
              label="Linkedin"
              value={linkedin}
              onChange={(e) => { setLinkedin(e.target.value); }}
            />
            <Input
              name="pitch"
              label="Pitch (URL)"
              value={pitch}
              onChange={(e) => { setPitch(e.target.value); }}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value); }}
            />
          </fieldset>
          <fieldset>
            <legend>
              Disponibilidade

              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>

            </legend>

            {scheduleItems.map((item, index) => (
              <div key={item.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da Semana"
                  value={item.week_day}
                  onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-Feira' },
                    { value: '2', label: 'Terça-Feira' },
                    { value: '3', label: 'Quarta-Feira' },
                    { value: '4', label: 'Quinta-Feira' },
                    { value: '5', label: 'Sexta-Feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />
                <Input
                  type="time"
                  name="from"
                  label="Das"
                  value={item.from}
                  onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                />
                <Input
                  type="time"
                  name="To"
                  label="Até"
                  value={item.to}
                  onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                />
              </div>
            ))}

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante
              {' '}
              <br />
              Preencha todos os dados!
            </p>
            <button type="submit">
              Salvar Cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default PsyForm;
