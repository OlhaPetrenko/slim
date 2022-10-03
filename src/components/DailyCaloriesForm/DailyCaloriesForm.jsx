import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './DailyCaloriesForm.module.scss';

function DailyCaloriesForm({ onSubmit }) {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [blood, setBlood] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      height: Number(height),
      age: Number(age),
      weight: Number(weight),
      desiredWeight: Number(desiredWeight),
      bloodType: Number(blood),
    };

    onSubmit(data);
    setHeight('');
    setAge('');
    setWeight('');
    setDesiredWeight('');
    setBlood('');
  }

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'height':
        setHeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      case 'desiredWeight':
        setDesiredWeight(value);
        break;
      case 'blood':
        setBlood(value);
        break;
      default:
        return;
    }
  }

  return (
    <div>
      <h2 className={s.title}>Calculate your daily calorie intake right now</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.helper}>
          <div className={s.formItem}>
            <input
              type="number"
              className={s.formInput}
              required
              name="height"
              min="0"
              value={height}
              onChange={handleChange}
              id="height"
            />
            <label className={s.formLabel} htmlFor="height">
              Height*
            </label>
          </div>
          <div className={s.formItem}>
            <input
              type="number"
              className={s.formInput}
              required
              name="age"
              min="0"
              value={age}
              onChange={handleChange}
              id="age"
            />
            <label className={s.formLabel} htmlFor="ege">
              Age *
            </label>
          </div>
          <div className={s.formItem}>
            <input
              type="number"
              className={s.formInput}
              required
              name="weight"
              min="0"
              value={weight}
              onChange={handleChange}
              id="curWeight"
            />
            <label className={s.formLabel} htmlFor="curWeight">
              Current weight *
            </label>
          </div>

          <button type="submit" className={s.btnActiveLeft}>
            Start losing weight
          </button>
        </div>

        <div className={s.helper}>
          <div className={s.formItem}>
            <input
              type="number"
              className={s.formInput}
              required
              name="desiredWeight"
              min="0"
              value={desiredWeight}
              onChange={handleChange}
              id="desiredWeight"
            />
            <label className={s.formLabel} htmlFor="desiredWeight">
              Desired weight *
            </label>
          </div>

          <div>
            <p className={s.radioText}>Blood type *</p>
            <div className={s.radioGroup}>
              <label className={s.radioLabel}>
                <input
                  className={s.radioInput}
                  type="radio"
                  name="blood"
                  value="1"
                  onChange={handleChange}
                  required
                />
                <span className={s.radioSpan}>1</span>
              </label>
              <label className={s.radioLabel}>
                <input
                  className={s.radioInput}
                  type="radio"
                  name="blood"
                  value="2"
                  onChange={handleChange}
                />
                <span className={s.radioSpan}>2</span>
              </label>
              <label className={s.radioLabel}>
                <input
                  className={s.radioInput}
                  type="radio"
                  name="blood"
                  value="3"
                  onChange={handleChange}
                />
                <span className={s.radioSpan}>3</span>
              </label>
              <label className={s.radioLabel}>
                <input
                  className={s.radioInput}
                  type="radio"
                  name="blood"
                  value="4"
                  onChange={handleChange}
                />
                <span className={s.radioSpan}>4</span>
              </label>
            </div>
          </div>

          <button type="submit" className={s.btnActiveRight}>
            Start losing weight
          </button>
        </div>
      </form>
    </div>
  );
}

export default DailyCaloriesForm;

DailyCaloriesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
