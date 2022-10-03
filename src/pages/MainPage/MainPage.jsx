import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dailyRateOperation } from 'redux/dailyRate/dailyRate-operations';

import Modal from 'components/Modal/Modal';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import s from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = data => {
    dispatch(dailyRateOperation(data));
    setModalOpen(true);
  };
  return (
    <>
      <div className={s.section}>
        <div className="container">
          <DailyCaloriesForm onSubmit={onSubmit} />
        </div>
      </div>
      {modalOpen && (
        <Modal close={closeModal}>
          <DailyCalorieIntake />
        </Modal>
      )}
    </>
  );
};
export default MainPage;
