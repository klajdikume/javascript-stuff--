import React, { useState } from "react";

export const Pet = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.animal}</h2>
        <h2>{props.breed}</h2>
      </div>
    );
  };

export const SearchParams = () => {
    const location = "Seattle, WA";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placehwolder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.showMessage = this.showMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showMessage = (user) => {
    alert('Followed' + user);
  };

  handleClick = () => {
    const { user } = this.props;
    setTimeout(() => this.showMessage(user), 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>
  }
}
// accessing state
// splitting code into more methods
// reading the props and state that correspond to the
// render related to that call

class ProfilePage1 extends React.Component {
  render() {
    const props = this.props;

    // inside render, props aren't class methods
    const showMessage = () => {
      alert('Followed' + props.user);
    };

    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };

    return <button onClick={handleClick}></button>
  }
}

function ProfilePageF({ user }) {
  const showMessage = () => {
    alert('Followed' + user);
  }

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  }

  return (
    <button onClick={handleClick}>Follow</button>
  );
}

function MessageThread() {
  const [message, setMessage] = useState('');

  const showMessage = () => {
    alert('You said: ' + message);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <>
      <input value={message} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
    </>
  )
}


