import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { productOperation } from 'redux/product/product-operations';
import useResizeScreen from 'shared/hooks/useResizeScreen';

import s from './add-product-form.module.scss';
function DiaryAddProductForm({ onSubmit, closeModal }) {
  const [productName, setName] = useState('');
  const [grams, setGrams] = useState('');
  const [productId, setProductId] = useState('');
  const mediaSize = useResizeScreen();
  const { isMobile } = mediaSize;

  const dispatch = useDispatch();
  const arrProducts = useSelector(state => state.product.items);
  const productNameInputId = nanoid();
  const gramsInputId = nanoid();

  const onClickFetch = e => {
    setName(e.target.value);
    if (e.target.value.replace(/ /g, '')) {
      dispatch(productOperation(e.target.value));
    }
  };

  const onClickTakeNameProduct = ({ target }) => {
    setName(target.innerText);
    setProductId(target.id);
  };

  const hendleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'productName':
        setName(value);
        break;

      case 'grams':
        setGrams(value);
        break;
      default:
        return;
    }
  };

  const onClickSubmit = e => {
    e.preventDefault();
    const data = {
      productId,
      weight: grams,
    };
    if (isMobile) {
      closeModal();
    }
    onSubmit(data);
    reset();
  };

  const reset = () => {
    setName('');
    setGrams('');
  };

  return (
    <>
      <form onSubmit={onClickSubmit} className={s.form}>
        <input
          onChange={onClickFetch}
          value={productName}
          className={s.input1}
          type="text"
          name="productName"
          placeholder="Enter product name"
          required
          id={productNameInputId}
        />
        <input
          onChange={hendleInputChange}
          value={grams}
          className={s.input2}
          type="number"
          name="grams"
          min="1"
          placeholder="Grams"
          pattern="^\d+(?:\.\d+)?\s*(?:grams)$"
          required
          id={gramsInputId}
        />

        {isMobile ? (
          <button className={s.btn1} type="submit">
            Add
          </button>
        ) : (
          <button className={s.btn2} type="submit"></button>
        )}
      </form>

      <ul className={s.productsList}>
        {productName &&
          arrProducts?.map(el => (
            <li
              key={el._id}
              onClick={onClickTakeNameProduct}
              id={el._id}
              className={s.productsList_item}
            >
              {el.title.ru}
            </li>
          ))}
      </ul>
    </>
  );
}

export default DiaryAddProductForm;

DiaryAddProductForm.propTypes = {
  onSubmit: PropTypes.func,
  closeModal: PropTypes.func,
};
