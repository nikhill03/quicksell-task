import React from 'react';
import '../css/SortingSelector.css';

const SortingSelector = ({ onChange , currentSelectedSort}) => {
  return (
    <select className="sorting-selector" value={currentSelectedSort} onChange={(e) => onChange(e.target.value)}>
      <option value="priority">Sort by Priority</option>
      <option value="title">Sort by Title</option>
    </select>
  );
};

export default SortingSelector;