import React, { Component } from 'react';
import './searchlist.css';
import '../../fonts/font-awesome.min.css';
import bsStore from '../../store/fetch-npm-node'
export default class SearchList extends Component {
    static propType = {
        dataSource: PropTypes.array,
    };
    constructor(props) {
        super(props);
    }
  componentDidMount(){
  }

    render() {
        return (
            <div>

            </div>
        );
    }
}
