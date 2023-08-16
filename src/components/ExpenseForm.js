/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./ExpenseForm.css";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  handleCharge,
  charge,
  handleAmount,
  amount,
  handleSummit,
  edit,
}) => {
  return (
    <form onSubmit={handleSummit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>지출 항목</label>
          <input
            type='text'
            className='form-control'
            name='charge'
            id='charge'
            placeholder='예) 렌트비'
            onChange={handleCharge}
            value={charge}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>비용</label>
          <input
            type='number'
            className='form-control'
            name='amount'
            id='amount'
            placeholder='예) 100'
            onChange={handleAmount}
            value={amount}
          />
        </div>
      </div>

      <button type='submit' className='btn'>
        {edit == true ? "수정" : "제출"}
        <MdSend
          className='btn-icon'
          // onClick={() => this.props.handleAdd(this.state)}
        />
      </button>
    </form>
  );
};

export default ExpenseForm;
