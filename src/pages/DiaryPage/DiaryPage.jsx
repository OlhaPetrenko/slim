import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import s from './DiaryPage.module.scss';

import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Summary from 'components/Summary/Summary';
import Modal from 'components/Modal/Modal';

import useResizeScreen from 'shared/hooks/useResizeScreen';

import {
  dayProductInfoOperation,
  dayProductPostOperation,
} from 'redux/day/day-operations';
import { dailyRateTakeId } from 'redux/dailyRate/dailyRate.selectors';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const dailyRateId = useSelector(dailyRateTakeId);
  const date = startDate.toLocaleDateString('en-CA');
  const mediaSize = useResizeScreen();
  const { isMobile } = mediaSize;

  const onClickToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    dispatch(dayProductInfoOperation({ date }));
  }, [date, dispatch]);

  const onSubmit = data => {
    const dataPost = { date, ...data };
    dispatch(dayProductPostOperation(dataPost));
  };
  if (!dailyRateId) {
    return <Navigate to="/calculator" />;
  }

  if (isMobile) {
    return (
      <>
        <section className={s.section}>
          <div className="container">
            <DatePicker
              className={s.DatePicker}
              selected={startDate}
              onChange={date => setStartDate(date)}
            />

            <DiaryProductsList date={date} />
            <button
              type="button"
              onClick={onClickToggleModal}
              className={s.btn}
            ></button>
            {isOpenModal && (
              <Modal close={onClickToggleModal}>
                <DiaryAddProductForm
                  onSubmit={onSubmit}
                  closeModal={onClickToggleModal}
                />
              </Modal>
            )}
          </div>
        </section>
        <Summary date={date} />
      </>
    );
  }

  return (
    <>
      <section className={s.section}>
        <div className="container">
          <DatePicker
            className={s.DatePicker}
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
          <DiaryAddProductForm onSubmit={onSubmit} />
          <DiaryProductsList date={date} />
        </div>
      </section>
      <Summary date={date} />
    </>
  );
};

export default DiaryPage;
