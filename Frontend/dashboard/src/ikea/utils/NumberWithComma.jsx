import React from 'react';
import PropTypes from 'prop-types';

const NumberWithComma = React.memo(({ value }) => {
  // value가 숫자일 경우만 포맷팅, 그렇지 않으면 기본값을 반환
  if (value == null || isNaN(value)) {
    return <div>Invalid number</div>;
  }

  const formattedValue = value.toLocaleString(); // 콤마 구분자를 자동으로 추가
  return <div>{formattedValue}</div>;
});

// Prop 타입 검사를 추가
NumberWithComma.propTypes = {
  value: PropTypes.number.isRequired,
};

export default NumberWithComma;