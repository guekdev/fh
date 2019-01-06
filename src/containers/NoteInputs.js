import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { addNote, deleteNote } from '../actions';

import Flatpickr from 'react-flatpickr';

import NoteList from '../components/NoteList';

class NoteInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      date: new Date()
    }
  }

  getZero(i) {
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }

  addNote() {
    let newText = this.state.text;
    let newTitle = this.state.title;

    if (newText !== "") {
      let d = new Date(this.state.date);

      let year = d.getFullYear();
      let month = this.getZero(d.getMonth() + 1);
      let date = this.getZero(d.getDate());
      let hours = this.getZero(d.getHours());
      let minutes = this.getZero(d.getMinutes());

      let newDate = `${year}-${month}-${date} ${hours}:${minutes}`;

      this.props.addNote(newTitle, newText, newDate)
      document.getElementById('new-note').value='';
      document.getElementById('new-title').value='';
      this.setState({text: ''})
      this.setState({title: ''})
    }
  }

  deleteNote = (id) => {
    this.props.deleteNote(id);
  }

  render() {
    return (
      <Fragment>
        <div className="NoteInputs">
          <div className="content">
            <h1>
              Skapa ny notering
            </h1>

            <div className="input-wrapper">
              <div className="input-top">
                <input
                  id="new-title"
                  placeholder="Titel för notering.."
                  onChange={event => this.setState({title: event.target.value})} />

                <Flatpickr
                  className="calendar"
                  data-enable-time
                  options={{time_24hr: true}}
                  value={this.state.date}
                  onChange={value => this.setState({date: value})} />
              </div>

              <textarea
                id="new-note"
                placeholder="Skriv en ny notering.."
                onChange={event => this.setState({text: event.target.value})} />

              <button
                className="add-btn"
                onClick={() => this.addNote()} >
                Lägg till
              </button>
            </div>
          </div>
        </div>

        <NoteList
          delete={this.deleteNote}
          notes={this.props.notes} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state
  }
}

export default connect(mapStateToProps, { addNote, deleteNote })(NoteInputs);
