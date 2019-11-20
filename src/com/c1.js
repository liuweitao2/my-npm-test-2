/* eslint-disable  */
import React from "react";
import './c1.less';
class C1 extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){}
    componentDidUpdate(){}
    componentWillReceiveProps(nexProps){}
    render(){
        return (
            <div className="demoBody">
                <p>c1111</p>
                {this.props.a} + {this.props.b} = {this.props.a + this.props.b}
            </div>
        )
    }
}
export default C1;