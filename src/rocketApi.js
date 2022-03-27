import axios from "axios";
import React, { Component } from 'react';
import LaunchCard from './components/launchCard';



export default class RocketList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            launches: []
        };
    }
  
    componentDidMount() {
        //axios.get('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?is_crewed=false&include_suborbital=true&related=false&hide_recent_previous=false')
        axios.get('response.json')
        .then((results) => {
            console.log(results.data.results)  
            this.setState({ launches: results.data.results });          
        });
    }
  
    render() {
      const launches = this.state.launches.map((launch, i) => (
        
          <LaunchCard key={launch.id} launch={launch}></LaunchCard>
        
      ));
  
      return (
        <div id="layout-content" className="layout-content-wrapper">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">{ launches }</div>
        </div>
      );
    }
  }



  

//   class Auth extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         user: undefined,
//       };
//     }
  
//     componentDidMount() {
//       const jwt = localStorage.getItem('jwt');
//       if (!jwt) {
//         this.props.history.push('/login');
//       }
  
//       api
//         .get('/user', { headers: { Authorization: `Bearer ${jwt}` } })
//         .then(res =>
//           res.setState({
//             user: res.data,
//           })
//         );
//     }
  
//     render() {
//       if (this.state.user === undefined) {
//         return (
//           <div>
//             <h1>Loading</h1>
//           </div>
//         );
//       }
  
//       return <div>{this.props.children}</div>;
//     }
//   }
  
//   export default withRouter(Auth);

