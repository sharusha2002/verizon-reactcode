// // // import React, { Component } from "react";

// // // export default class Clock extends Component {
// // //     render(){
// // //         return(
// // //             <div>

// // //             </div>
// // //         )
// // //     }
// // // }


// // import React, { Component } from 'react';

// // class Clock extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       timer: 0,
// //     };
// //   }

// //   componentDidMount() {
// //     // Start the timer when the component mounts
// //     this.intervalId = setInterval(() => {
// //       this.setState((prevState) => ({
// //         timer: prevState.timer + 1,
// //       }));
// //     }, 1000);
// //   }

// //   componentDidUpdate() {
// //     // Additional logic to perform on each update (if needed)
// //   }

// //   componentWillUnmount() {
// //     // Stop the timer when the component is unmounted
// //     clearInterval(this.intervalId);
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h1>Timer: {this.state.timer} seconds</h1>
// //       </div>
// //     );
// //   }
// // }

// // export default Clock;

// import React, { Component } from 'react';

// export default class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hours: 0,
//       minutes: 0,
//       seconds: 0
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.updateTimer(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   updateTimer() {
//     const { hours, minutes, seconds } = this.state;

//     let newSeconds = seconds + 1;
//     let newMinutes = minutes;
//     let newHours = hours;

//     if (newSeconds === 60) {
//       newSeconds = 0;
//       newMinutes += 1;
//     }

//     if (newMinutes === 60) {
//       newMinutes = 0;
//       newHours += 1;
//     }

//     this.setState({
//       hours: newHours,
//       minutes: newMinutes,
//       seconds: newSeconds
//     });
//   }

//   render() {
//     const { hours, minutes, seconds } = this.state;

//     return (
//       <div>
//         <h1>Timer: {`${hours}:${minutes}:${seconds}`}</h1>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    setInterval(()  => this.setState({ currentTime: new Date().toLocaleTimeString()}),1000);
    // setInterval(() => {
    //   console.log(new Date().toLocaleTimeString());
    // }, 1000);
  }

 

  componentWillUnmount = () => {
    clearInterval(this.state.currentTime);
    console.log("component Will Unmount");
  }
  
  
  render() {
    return (
      <div>
        <h1>{this.state.currentTime}</h1>
        {/* <button onClick={this.componentWillUnmount}>Reset</button> */}
      </div>
    );
  }
}


