import React from 'react';

import NoteInputs from './NoteInputs';




const Left = (
  <div id="leftside">
    <h1>
      Skapa en ny notering
    </h1>
    <div className="content">
      <div className="right">
        <div className="title">Lägg titel..</div>
        <div className="txtarea">Skriv notering..</div>
      </div>
      <div className="left">
        <div id="calendar">2019-01-20 20:41</div>
        <div id="add-btn">Lägg till</div>
      </div>
    </div>
  </div>
);

const Right = (
  <div id="rightside">
    <h2>
      Noteringar
    </h2>
    <div className="content">
      <div className="box">
        <div className="box-big">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="box-small">
          <p className="date">
            2019-01-20 20:41
          </p>
        </div>
      </div>
      <div className="box">
        <div className="box-big">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="box-small">
          <p className="date">
            2019-01-20 20:41
          </p>
        </div>
      </div>
      <div className="box">
        <div className="box-big">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="box-small">
          <p className="date">
            2019-01-20 20:41
          </p>
        </div>
      </div>
      <div className="box">
        <div className="box-big">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="box-small">
          <p className="date">
            2019-01-20 20:41
          </p>
        </div>
      </div>
      <div className="box">
        <div className="box-big">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="box-small">
          <p className="date">
            2019-01-20 20:41
          </p>
        </div>
      </div>
    </div>
  </div>
);











export default function App() {
  return (
    <div className="App">
      <NoteInputs />
    </div>
  );
}
