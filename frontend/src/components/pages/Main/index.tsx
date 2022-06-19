
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Header from '../../Header';
import Content from '../../Content';
import Pagination from '../../Pagination';

import plus from '../../../images/plus.svg';
import { Button, Container } from './styles';

const users = [
  {
    name: 'matheus augusto ferreira',
    date: '00/00',
    entry: '00/00',
    exit: '00/00',
  },
  {
    name: 'matheus augusto ferreira',
    date: '00/00',
    entry: '00/00',
    exit: '00/00',
  },
  {
    name: 'matheus augusto ferreira',
    date: '00/00',
    entry: '00/00',
    exit: '00/00',
  },
  {
    name: 'matheus augusto',
    date: '00/00',
    entry: '00/00',
    exit: '00/00',
  },
  {
    name: 'matheus augusto',
    date: '00/00',
    entry: '00/00',
    exit: '00/00',
  },
  {
    name: 'matheus augusto',
    date: '00/00',
    entry: '00/00',
    exit: '00/00',
  },
  {
    name: 'matheus augusto',
    date: '00/00',
    entry: '00/00',
    exit: '00/00',
  },
  {
    name: 'matheus augusto',
    date: '00/00',
    entry: '00/00',
    exit: '00/00',
  },
  {
    name: 'matheus augusto',
    date: '00/00',
    entry: '00/00',
    exit: '00/00',
  },
]

function Main() {
  const history = useHistory();
  const token = localStorage.getItem('x-access-token');

  (async function getUsers() {
    const response = await axios.get('http://18.231.25.60/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(response.data);
  })();

  return (
    <Container>
      <Header>
        <Button onClick={ (e) => { history.push('/users/create') } }>
          <img src={plus} alt="+" />
        </Button>
      </Header>

      <Content>
        <header className="fields-header">
          <span className="content-field">usuário</span>
          <span className="content-field">data</span>
          <span className="content-field">entrada</span>
          <span className="content-field">saida</span>
        </header>

        {
          users.map((user) => {
            return (
              <div className="user-content">
                <span className="user-field user-name">{ user.name }</span>
                <span className="user-field user-date">{ user.entry }</span>
                <span className="user-field user-entry">{ user.entry }</span>
                <span className="user-field user-exit">{ user.exit }</span>
              </div>
            )
          })
        }
        <Pagination />
      </Content>

    </Container>
  );
};

export default Main;
