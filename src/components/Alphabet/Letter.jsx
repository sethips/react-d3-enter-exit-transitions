
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

// Gonna have to use this: http://stackoverflow.com/questions/29977799/how-should-i-handle-a-leave-animation-in-componentwillunmount-in-react

class Letter extends Component {
    state = {
        y: -60,
        className: 'enter',
        fillOpacity: 1e-6
    }

    componentWillAppear(callback) {
        //console.log('willAppear');
    }

    componentDidAppear() {
        //console.log('didAppear');
    }

    componentWillEnter(callback) {
        let node = d3.select(ReactDOM.findDOMNode(this));

        node.transition()
            .duration(750)
            .attr('y', 0)
            .style('fill-opacity', 1);

        callback();
    }

    componentDidEnter() {
        //console.log('didEnter');
    }

    componentWillLeave(callback) {
        let node = d3.select(ReactDOM.findDOMNode(this));

        this.setState({className: 'exit'});

        node.transition()
            .duration(750)
            .attr('y', 60)
            .style('fill-opacity', 1e-6)
            .on('end', callback);
    }

    componentDidLeave() {
        //console.log('didLeave');
    }

    /* text.attr("class", "update")
       .attr("y", 0)
       .style("fill-opacity", 1)
       .transition(t)
       .attr("x", (d, i) => i * 32); */

    componentWillUpdate(nextProps, nextState) {
        console.log(this.props, nextProps);
    }

    /* componentDidUpdate() {
       this.setState({className: 'update',
       y: 0,
       fillOpacity: 1});

       let node = d3.select(ReactDOM.findDOMNode(this));

       node.transition()
       .duration(750)
       .attr('x', this.props.i*32);
       } */

    /* ext.exit()
       .attr("class", "exit")
       .transition(t)
       .attr("y", 60)
       .style("fill-opacity", 1e-6)
       .remove(); */

    /* componentWillUnmount() {
       let node = d3.select(ReactDOM.findDOMNode(this));

       this.setState({className: 'exit'});

       node.transition()
       .duration(750)
       .attr('y', 60)
       .style('fill-opacity', 1e-6);
       } */

    render() {
        return (
            <text dy=".35em"
                  y={this.state.y}
                  x={this.props.i*32}
                  className={this.state.className}
                  style={{fillOpacity: this.state.fillOpacity}}>
                {this.props.d}
            </text>
        );
    }
};

export default Letter;
