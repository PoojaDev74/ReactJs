import React from "react";
 import  Button  from "../components/Button"
import { PlusCircle } from "lucide-react";

const GroupList = ({ groups, selectedGroup, setSelectedGroup, onAdd }) => (
  <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col h-full">
    <h2 className="text-xl font-bold mb-4">Groups</h2>
    <div className="flex-1 overflow-y-auto">
      {groups.map((group) => (
        <Button
          key={group._id}
          variant={selectedGroup?._id === group._id ? "default" : "outline"}
          onClick={() => setSelectedGroup(group)}
          className="group"
        >
          {group.name}
        </Button>
      ))}
    </div>
    <Button onClick={onAdd} className="new group">
      <PlusCircle size={16} /> Add new group
    </Button>
  </div>
);

export default GroupList;