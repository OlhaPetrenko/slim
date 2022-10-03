import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dailyRateUserOperation } from 'redux/dailyRate/dailyRate-operations';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Summary from 'components/Summary/Summary';
import Modal from 'components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = data => {
    dispatch(dailyRateUserOperation(data));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="container">
        <DailyCaloriesForm onSubmit={onSubmit} />
      </div>
      <Summary />
      {modalOpen && (
        <Modal close={closeModal}>
          <DailyCalorieIntake />
        </Modal>
      )}
    </>
  );
};

export default CalculatorPage;
