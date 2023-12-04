import { Component } from 'react';

class ClassComponent extends Component {
  state = {
    value: 0,
    userName: 'Pavlo',
  };

  componentDidMount() {
    console.log('MOUNT CLASS COMPONENT');
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE CLASS COMPONENT');

    if (prevProps.counter !== this.props.counter) {
      this.setState({ value: this.props.counter + 100 });
    }
  }

  componentWillUnmount() {
    console.log('UNMOUNT CLASS COMPONENT');
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    console.log(e.code);
  };

  onChangeValue = () => {
    // this.setState({ value: 10 });
    this.setState(prevState => {
      return {
        value: prevState.value + 10,
        userName: `${prevState.userName} Sheremet`,
      };
    });
  };

  render() {
    return (
      <div>
        <div>CLASS</div>
        {<span>Hello {this.state.userName.toUpperCase()}</span>}
        <div>
          {!!this.state.value && <div>Has value {this.state.value}</div>}
        </div>
        <button onClick={this.onChangeValue}>CHANGE VALUE</button>
      </div>
    );
  }
}

export { ClassComponent };
