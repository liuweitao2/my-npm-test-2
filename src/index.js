/* eslint-disable  */
import React from "react";
import './index.less';
import C_1 from './com/c1'
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
                <p>d1111</p>
                {this.props.a} + {this.props.b} = {this.props.a + this.props.b}
            </div>
        )
    }
}
export const C1 = C_1;
export default Demo;