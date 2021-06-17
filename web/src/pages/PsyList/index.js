import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import PsyItem from '../../components/PsyItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api.ts';

import './styles.css';

function PsyList() {
  const [psys, setPsys] = useState([]);

  // eslint-disable-next-line camelcase
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchPsys(e) {
    e.preventDefault();

    const response = await api.get('users');

    console.log(response.data);
    setPsys(response.data);
  }

  return (
    <div id="page-psy-list" className="container">
      <PageHeader title="Estes são os psicólogos disponíveis!">
        <form id="search-psys" onSubmit={searchPsys}>
          <Select
            name="week_day"
            label="Dia da Semana"
            // eslint-disable-next-line camelcase
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value); }}
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
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => { setTime(e.target.value); }}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {psys.map((psy) => <PsyItem key={psy.id} psy={psy} />)}
      </main>
    </div>
  );
}

export default PsyList;
