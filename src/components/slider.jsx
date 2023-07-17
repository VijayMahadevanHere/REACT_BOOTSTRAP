
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function RangeExample() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <>
      <Form.Label>Range</Form.Label>
      <Form.Range value={sliderValue} onChange={handleSliderChange} />
      <p>Selected value: {sliderValue}</p>
    </>
  );
}

export default RangeExample;
