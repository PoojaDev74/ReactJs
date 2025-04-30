import React, { useEffect, useState } from 'react';
import GroupList from './components/GroupList';
import NoteList from './components/NoteList';
import GroupPopup from './components/GroupPopup';
import NoteEditor from './components/NoteEditor';
import { fetchNotes, fetchGroup} from './services/api';
// import axios from 'axios';
// import API from './services/api';
import './App.css';

function App() {
  const [groups, setGroups] = useState([]);
  const [notes, setNotes] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  // const [text, setText] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {
    const data = await fetchGroup();
    setGroups(data);
  };


  const handleGroupSelect = async (group) => {
    setSelectedGroup(group);
    const data = await fetchNotes(group._id);
    setNotes(data);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="header">
          <h1>Pocket Notes</h1>
        </div>
        <GroupList groups={groups} onSelect={handleGroupSelect} selectedGroup={selectedGroup} />
      </div>

      <div className="main">
        {selectedGroup ? (
          <>
            <div className="group-header">
              <div className="group-icon">
                {selectedGroup.name.slice(0, 2).toUpperCase()}
              </div>
              <h2>{selectedGroup.name}</h2>
            </div>
            <NoteList notes={notes} />
            <NoteEditor groupId={selectedGroup._id} refreshNotes={() => handleGroupSelect(selectedGroup)} />
          </>
        ) : (
          <div className="main">
            <img src="https://tse3.mm.bing.net/th?id=OIP.BAXv4W89Wyi62WtoftbtHwHaDt&pid=Api&P=0&h=180" alt="" />
          <div className="empty-state">
            <h2>Pocket Notes</h2>
            <p> Send and receive messages without keeping your phone online.
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
          </div>
          </div>
        )}
        <div className="footer">🔒 end-to-end encrypted</div>
        <button className="add-group-button" onClick={() => setIsPopupOpen(true)}>
          +
        </button>
      </div>
      {isPopupOpen && <GroupPopup onClose={() => setIsPopupOpen(false)} refreshGroups={loadGroups} />}
    </div>
  );
}

//   useEffect(() => {
//     API.get("/groups").then((res) => {
//       console.log("Groups fetched:", res.data);
//       setGroups(res.data);
//     })
//     .catch((err) => console.error("Error fetching groups:", err));
// }, []);

//   const fetchNotes = (group) => {
//     setSelectedGroup(group);
//     axios.get(`${API}/groups/${group._id}/notes`).then(res => setNotes(res.data));
//   };

//   const sendNote = () => {
//     if (!text.trim()) return;
//     axios.post(`${API}/notes`, { groupId: selectedGroup._id, text }).then(res => {
//       setNotes([...notes, res.data]);
//       setText('');
//     });
//   };

//   return (
//     <div className="container">
//       <div className="sidebar">
//         <h2>Pocket Notes</h2>
//         {groups.map(g => (
//           <div key={g._id} onClick={() => fetchNotes(g)} className="group">
//             <div className="avatar" style={{ backgroundColor: g.color }}>{g.initials}</div>
//             <span>{g.name}</span>
//           </div>
//         ))}
//         {/* Add group button here (future feature) */}
//       </div>
//       <div className="main">
//         {selectedGroup ? (
//           <>
//             <h3>{selectedGroup.name}</h3>
//             <div className="notes">
//               {notes.map(n => (
//                 <div key={n._id} className="note">
//                   <p>{n.text}</p>
//                   <small>{new Date(n.timestamp).toLocaleString()}</small>
//                 </div>
//               ))}
//             </div>
//             <div className="input">
//               <textarea
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Enter your text here..."
//               />
//               <button onClick={sendNote} disabled={!text.trim()}>Send</button>
//             </div>
//           </>
//         ) : (
//           <div className="welcome">Select a group to view notes</div>
//         )}
//       </div>
//     </div>
//   );
// }

export default App;

