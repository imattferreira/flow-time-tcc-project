import { ReactNode } from 'react';

import { Container, Content, Header } from './styles';

interface ModalProps {
  children: ReactNode;
  title: string;
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;

}

function Modal({ children, title, modalState, setModalState }: ModalProps) {
  return (
    <>
      {
        modalState &&

        // <Container onClick={ (e) => { setModalState(false) } }>
        <Container>
          <Content>
            <Header>
              <span className="content-field">{title}</span>
            </Header>
            {children}
          </Content>
        </Container>

      }
    </>
  );
};

export default Modal;
