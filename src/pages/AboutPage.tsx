/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  };

  return (
    <div className="todolistdiv">
      <h2>Информация</h2>
      <p>
        Данное приложение представляет собой TodoList с возможностью удаления/изменения статуса задач.
      </p>
      <p>
        <b>Используемые технологии:</b>
      </p>
      <ul>
        <li>- React</li>
        <li>- TypeScript</li>
        <li>- MatetializeCSS</li>
      </ul>
      <p>
        Данные (добавленные Todos) сохраняются в LocalStorage
      </p>
      <button
        onClick={clickHandler}
        type="button"
        className="blue darken-3 btn waves-effect waves-light"
      >
        На главную
      </button>
    </div>
  );
};
export default AboutPage;
