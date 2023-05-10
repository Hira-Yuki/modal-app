import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";
import Select from "./components/Select";
import * as S from "./Styled";

function App() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  // 첫번째 모달 제어
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // 두번째 모달 제어
  const openModal2 = () => setModal2Open(true);
  const closeModal2 = () => setModal2Open(false);

  return (
    <div>
      <Button />
      <Input />
      <h2>Modal</h2>
      <div>
        <S.StMediumPrimaryButton onClick={openModal}>
          open modal
        </S.StMediumPrimaryButton>
        <Modal open={modalOpen} close={closeModal} header="첫번째 모달이에요">
          1번 모달의 내용
        </Modal>
        <S.StMediumNegativeButton onClick={openModal2}>
          open modal
        </S.StMediumNegativeButton>
        <Modal2 open={modal2Open} close={closeModal2} header="두번째 모달이에요">
          2번 모달의 내용
        </Modal2>
      </div>
      <div id="portal-container">
      <S.StSelectDiv>
        <h2>Select</h2>
        <Select />
      </S.StSelectDiv>
      </div>
      
    </div>
  );
}

export default App;
