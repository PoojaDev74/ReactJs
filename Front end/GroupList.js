import React from "react";
//  import  Button  from "../components/Button"
// import { PlusCircle } from "lucide-react";

// const GroupList = ({ groups, selectedGroup, setSelectedGroup, onAdd }) => (
//   <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col h-full">
//     <h2 className="text-xl font-bold mb-4">Groups</h2>
//     <div className="flex-1 overflow-y-auto">
//       {groups.map((group) => (
//         <Button
//           key={group._id}
//           variant={selectedGroup?._id === group._id ? "default" : "outline"}
//           onClick={() => setSelectedGroup(group)}
//           className="group"
//         >
//           {group.name}
//         </Button>
//       ))}
//     </div>
//     <Button onClick={onAdd} className="new group">
//       <PlusCircle size={16} /> Add new group
//     </Button>
//   </div>
// );

// const groups = [
//   { name: "My Notes", initials: "MN", color: "#4169e1" },
//   { name: "My personal grp", initials: "MP", color: "#b57edc" },
//   { name: "Javascript grp", initials: "JG", color: "#d2691e" },
//   { name: "HTML grp", initials: "HG", color: "#20b2aa" },
//   { name: "CSS Notes", initials: "CN", color: "#ff4500" },
//   { name: "SQL Notes", initials: "SN", color: "#4169e1" },
//   { name: "Python Notes", initials: "PN", color: "#da70d6" }
// ];



function GroupList({ groups, onSelect, selectedGroup }) {
  return (
    <div className="group-list">
      {groups.map((group) => (
        <div
          key={group._id}
          className={`group-item ${selectedGroup?._id === group._id ? 'active' : ''}`}
          onClick={() => onSelect(group)}
        >
          <div className="group-avatar" style={{ backgroundColor: group.color}}> 
            {group.name.slice(0, 2).toUpperCase()}
          </div>
          <span>{group.name}</span>
        </div>
      ))}
      <div className="fab-button">+</div>
    </div>
  );
}

export default GroupList;