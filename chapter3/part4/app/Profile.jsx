import React, { PropTypes } from 'react';
import Hobby from './Hobby';

const propTypes = {
  name: PropTypes.string.isRequired
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: 0,
      hobbies: ['skateboarding', 'rock music']
    };
    this.likedCallback = this.likedCallback.bind(this);
    this.addHobbyCallback = this.addHobbyCallback.bind(this);
  }


  componentDidMount() {
    setTimeout(() => {
      this.likedCallback();
    }, 1000);
  }

  likedCallback() {
    let liked = this.state.liked;
    liked++;
    this.setState({
      liked
    });
  }

  addHobbyCallback() {
    const hobbyInput = this.refs.hobby;
    const val = hobbyInput.value;
    if (val) {
      let hobbies = this.state.hobbies;
      hobbies = [...hobbies, val];
      this.setState({
        hobbies
      }, () => {
        hobbyInput.value = '';
      });
    }
  }

  render() {
    return (
      <div>
        <h1>My name is {this.props.name}</h1>
        <button onClick={this.likedCallback}>Like Me!</button>
        <h2>How many times you liked me: {this.state.liked}</h2>
        <h2>Hobbies:</h2>
        <ul>
          {this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby} />)}
        </ul>
        <input type="text" ref="hobby" />
        <button onClick={this.addHobbyCallback}>Add Hobby</button>
      </div>
    );
  }
}

Profile.propTypes = propTypes;

export default Profile;
