import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import SubmitButton from '../../buttons/submitButton';
import Content from '../../Content';
import Header from '../../Header';
import Input from '../../Input';
import InputCheckbox from '../../InputCheckbox';

import { Container } from './styles';

type ICreateUser = {
  name: string;
  id: string;
  contract_init: string;
  account_type: string;
}

function CreateUser() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({} as ICreateUser);
  const [collaboratorOptionActive, setCollaboratorOptionActive] = useState(false);
  const [studentOptionActive, setStudentOptionActive] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const token = localStorage.getItem('x-access-token');

      const response = await axios.post('http://18.231.25.60/auth', {
        data: {
          ...userInfo
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      switch (response.status) {
        case 200:
          history.push('/dashboard');
          break;

        default:
          alert('email ou senha incorretos');
          break;
      }
    } catch (err) {
      alert('usuario ou RFID ja existe');
    }
  }

  return (
    <>
      <Header />

      <Container>
        <Content>
          <header className="fields-header">
            <span className="content-field">Criar usuário</span>
          </header>
          <form action="submit" onSubmit={ handleSubmit }>
            <Input
              placeholder="Nome"
              className="input"
              onChange={e => setUserInfo({
                name: e.target.value,
                account_type: userInfo.account_type,
                contract_init: userInfo.contract_init,
                id: userInfo.id,
              })}
            />
            <Input
              placeholder="Id"
              className="input"
              onChange={e => setUserInfo({
                name: userInfo.name,
                account_type: userInfo.account_type,
                contract_init: userInfo.contract_init,
                id: e.target.value,
              })}
            />
            <Input
              placeholder="Inicio de contrato"
              className="input"
              onChange={e => setUserInfo({
                name: userInfo.name,
                account_type: userInfo.account_type,
                contract_init: e.target.value,
                id: userInfo.id,
              })}
            />
            <div className="input-container">
              <InputCheckbox
                title="Colaborador"
                isActive={collaboratorOptionActive}
                onClick={e => {
                  setUserInfo({
                    name: userInfo.name,
                    account_type: 'contributor',
                    contract_init: userInfo.contract_init,
                    id: userInfo.id,
                  });

                  setCollaboratorOptionActive(!collaboratorOptionActive);
                  setStudentOptionActive(false);

                  console.log(collaboratorOptionActive)
                }
                }
              />
              <InputCheckbox
                title="Aluno"
                isActive={studentOptionActive}
                onClick={e => {
                  setUserInfo({
                    name: userInfo.name,
                    account_type: 'student',
                    contract_init: userInfo.contract_init,
                    id: userInfo.id,
                  });

                  setCollaboratorOptionActive(false);
                  setStudentOptionActive(!studentOptionActive);
                }
                }
              />
            </div>

            <SubmitButton title="Criar" />
          </form>
        </Content>
      </Container>
    </>
  );
};

export default CreateUser;
