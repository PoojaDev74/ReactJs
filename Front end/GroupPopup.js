import React, { useState, useEffect, useRef } from 'react';
import { createGroup } from '../services/api';

function GroupPopup({ onClose, refreshGroups }) {
  const [groupName, setGroupName] = useState('');
  const popupRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onClose]);

  const handleCreateGroup = async () => {
    if (groupName.trim().length < 2) {
      alert('Group name must be at least 2 characters.');
      return;
    }
    await createGroup(groupName.trim());
    refreshGroups();
    onClose();
  };

  return (
    <div className="popup-backdrop">
      <div className="popup" ref={popupRef}>
        <h3>Create New Group</h3>
        <input
          type="text"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button onClick={handleCreateGroup}>Create</button>
      </div>
    </div>
  );
}

export default GroupPopup;
