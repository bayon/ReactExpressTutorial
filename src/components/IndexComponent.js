import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class IndexComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {serverports: []};
    }
    componentDidMount(){
      // http://localhost:4200/serverport
      //http://restez:123restez@ds151864.mlab.com:51864/restez/
      axios.get('http://localhost:4200/serverport')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.serverports.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Port</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }
