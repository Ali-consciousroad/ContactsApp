import './App.css';
import React, { Component } from 'react';

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
      <ContactList contacts={[
        { name: 'Hassan '},
        { name: 'Hussein '},
        { name: 'Ali '}
      ]} />
        <ContactList contacts={[
        { name: 'Jean '},
        { name: 'Pierre '},
        { name: 'Arthur '}
      ]}  />
        <ContactList contacts={[
        { name: 'Obama '},
        { name: 'Bolt '},
        { name: 'Jordan '}
      ]}  />
    </div>
  );
}

export default App;
