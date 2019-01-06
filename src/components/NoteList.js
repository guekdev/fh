import React from 'react';


export default function NoteList(props) {
  return (
    <div className="NoteList">
      <h2>
        Noteringar
      </h2>
      <div className="content">
        <ul>
          {
            props.notes.map(note => {
              return (
                <li key={note.id}>
                  <div className="note-top">
                    <h4 className="note-title">{note.title}</h4>
                    <button
                      onClick={() => props.delete(note.id)}
                      className="note-del-btn" >
                      &#x2715;
                    </button>
                  </div>

                  <div className="note-body">
                    <p className="note-text">{note.text}</p>
                    <p className="note-date">Datum: {note.date}</p>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}
