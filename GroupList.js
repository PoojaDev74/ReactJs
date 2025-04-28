import React from "react";
//  import  Button  from "../components/Button"
// import { PlusCircle } from "lucide-react";

function GroupList({ groups, onSelect, selectedGroup }) {
  return (
    <div className="group-list">
      {groups.map((group) => (
        <div
          key={group._id}
          className={`group-item ${selectedGroup?._id === group._id ? 'active' : ''}`}
          onClick={() => onSelect(group)}
        >
          <div className="group-avatar">
            {group.name.slice(0, 2).toUpperCase()}
          </div>
          <span>{group.name}</span>
        </div>
      ))}
    </div>
  );
}

export default GroupList;
