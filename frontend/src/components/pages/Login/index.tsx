import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import SubmitButton from '../../buttons/submitButton';
import Input from '../../Input';
import AnchorButton from '../../buttons/AnchorButton';
import Modal from '../../Modal';

import { Container, Wrapper, Content, LogoContent, Options } from './styles';
import logo from './../../../images/logo.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [createUserEmail, setCreateUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserPassword, setCreateUserPassword] = useState('');
  const [createUserName, setCreateUserName] = useState('');
  const [modalState, setModalState] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await axios.post('http://18.231.25.60/auth', {
        email,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('x-access-token', token);
  
      switch (response.status) {
        case 200: 
          history.push('/dashboard');
          break;
        case 404: 
          alert('email ou senha incorretos');
          break;
        default: 
          alert('email ou senha incorretos');
          break;
      }
    } catch(err) {
      alert('email ou senha incorretos');
    }

  }

  async function handleCreateUserSubmit(e: FormEvent) {
    e.preventDefault();


    const response = await axios.post(`http://18.231.25.60/admin`, {
      name: createUserName,
      email: createUserEmail,
      password: createUserPassword,
    });

    switch (response.status) {
      case 201:
        setModalState(false);
        break;
      case 409:
        alert('usuario ja existe');
        break;
      default:
        alert('dados incorretos');
        break;

    }
  }

  return (
    <Wrapper>
      <Container>
        <Content>
          <h1>Bem vindo de volta</h1>
          <form action="submit" onSubmit={handleSubmit} className="login">
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => { setEmail(e.target.value) }}
              required
            />
            <Input
              placeholder="Senha"
              type="password"
              onChange={(e) => { setPassword(e.target.value) }}
              required
            />
            <SubmitButton title="Entrar" />
          </form>
          <Options>
            <AnchorButton
              title="não possui conta?"
              onClick={() => { setModalState(true) }}
            />
          </Options>
        </Content>
      </Container>
      <LogoContent>
        <img src={logo} alt="flow-time" />
        <p>Sistema Administrativo</p>
      </LogoContent>
      <Modal
        title="Criar conta"
        modalState={modalState}
        setModalState={setModalState}
      >
        <form action="submit" onSubmit={handleCreateUserSubmit} className="create-user-form">
          <Input
            placeholder="Nome"
            type="text"
            onChange={(e) => { setCreateUserName(e.target.value) }}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => { setCreateUserEmail(e.target.value) }}
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => { setCreateUserPassword(e.target.value) }}
            required
          />
          <div className="btn-wrapper">
            <SubmitButton title="Entrar" />
          </div>
        </form>
      </Modal>
    </Wrapper>
  );
};

export default Login;
