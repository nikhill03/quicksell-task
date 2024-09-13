import '../css/Navbar.css';
import { MdOutlineTune } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from 'react';

const groupOptions = [
    { label: "Status", value: "status" },
    { label: "User", value: "username" },
    { label: "Priority", value: "priority" }
];

const orderOptions = [
    { label: "Priority", value: "priority" },
    { label: "Title", value: "title" }
];

const Navbar = ({ groupingType, sortingType, handleGroupingChange, handleSortingChange }) => {
    const [expandMore, setExpandMore] = useState(false);

    return (
        <div className='nav'>
            <div
                className='expand_btn'
                onClick={() => { setExpandMore(prev => !prev); }}
            >
                <MdOutlineTune />
                <span>Display</span>
                <FaAngleDown />
            </div>
            
            {expandMore && (
                <div className="dropdown">
                    <div className='display'>
                        <p>Grouping</p>
                        <select
                            className="grouping-selector"
                            id='groupBy'
                            value={groupingType}
                            placeholder="Select Group"
                            onChange={(e) => handleGroupingChange(e.target.value)}
                        >
                            {groupOptions.map(option => (
                                <option key={option.value}   value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='display'>
                        <p>Ordering</p>
                        <select
                            className="sorting-selector"
                            id='sortBy'
                            value={sortingType}
                            onChange={(e) => handleSortingChange(e.target.value)}
                        >
                            {orderOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;