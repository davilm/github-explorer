import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/49492244?s=460&u=43c204835ed75e08358557cca4b3a62305028681&v=4"
            alt="Davi Leal"
          />
          <div>
            <strong>davilm/conventional-changelog</strong>
            <p>
              Tools to generate changelogs and release notes from a project's
              commit messages and metadata.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/49492244?s=460&u=43c204835ed75e08358557cca4b3a62305028681&v=4"
            alt="Davi Leal"
          />
          <div>
            <strong>davilm/conventional-changelog</strong>
            <p>
              Tools to generate changelogs and release notes from a project's
              commit messages and metadata.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/49492244?s=460&u=43c204835ed75e08358557cca4b3a62305028681&v=4"
            alt="Davi Leal"
          />
          <div>
            <strong>davilm/conventional-changelog</strong>
            <p>
              Tools to generate changelogs and release notes from a project's
              commit messages and metadata.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
