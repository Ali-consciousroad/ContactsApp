import React, { Component } from 'react'

class ListContacts extends Component {
    render() {
        //console.log('Props', this.props)
        return (
            <ol className='contact-list'>
                {this.props.contacts.map((contact) => (
                    //React use key to understand what has been changed without recreating the entire list
                    <li key={contact.id}>
                        {contact.name}
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContacts