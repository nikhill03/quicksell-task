import React from 'react';
import '../css/GroupingSelector.css';

const GroupingSelector = ({ onChange, currentSelectedGroup }) => {
  return (
    <select
      className="grouping-selector"
      value={currentSelectedGroup}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="status">Group by Status</option>
      <option value="username">Group by User</option>
      <option value="priority">Group by Priority</option>
    </select>
  );
};

export default GroupingSelector;