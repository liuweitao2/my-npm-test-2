/* eslint-disable  */
import React from "react";
import './index.less';
class Demo extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){}
    componentDidUpdate(){}
    componentWillReceiveProps(nexProps){}
    render(){
        return (
            <div className="demoBody">
                {this.props.a} + {this.props.b} = {this.props.a + this.props.b}
            </div>
        )
    }
}
export default Demo;