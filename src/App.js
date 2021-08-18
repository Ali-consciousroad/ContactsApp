import React, { Component } from 'react';
import ListContacts from './ListContacts';
import './App.css';

const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];
 
class ContactList extends React.Component {
  render(){
    // All components will have the same names 
    /*
    const people = [
      { name: 'Tyler'},
      { name: 'Karen'},
      { name: 'Richard'}
    ]*/

    // Use React properties to allow specific properties for each component
    const people = this.props.contacts 

    // .map() won't work if we don't have values for each created component
    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

function App() {
  return (
    <div className="App">
      <ListContacts contacts={contacts} />
    </div>
  );
}

export default App;
