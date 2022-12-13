import axios from "axios";
import { any } from "cypress/types/bluebird";
import React, { useState } from "react";

export default class Calculator extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {operand1: "", operand2: "", operation: "", result: ""}
        this.handleOperand1 =  this.handleOperand1.bind(this);
        this.handleOperand2 = this.handleOperand2.bind(this);
        this.handleOperation = this.handleOperation.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    handleOperand1(e:any){
        this.setState({
            txtOperand1: e.target.value
        });
    }
    handleOperand2(e:any){
        this.setState({
            txtOperand2: e.target.value
        });
    }
    handleOperation(e:any){
        this.setState({
            txtOperation: e.target.value
        });
    }
    onSubmit(e:any){
        e.preventDefault();
        const evaluate = {
            operand1 : this.state.txtOperand1,
            operand2 : this.state.txtOperand2,
            operation: this.state.txtOperation
        };
        axios.post("http://localhost:8080/evaluate", evaluate).then(res=>{
            if(res.status==200){
                this.setState({result: res.data})
            }
        })

        this.setState({
            txtOperand1: e.target.value
        });
    }
    render(){
        return(
            <div className="container">
                <form>
                    <input type="text" name="operand1" id="operand1" value={this.state.txtOperand1} onChange={this.handleOperand1} placeholder="first number"/>
                    <input type="text" name="operand2" id="operand2"  value={this.state.txtOperand2} onChange={this.handleOperand2} placeholder="second number"/>
                    <input type="text" name="operation" id="operation" value={this.state.txtOperation} onChange={this.handleOperation} placeholder= "operation"/>
                    <input type={"text"} name="result" value={this.state.result} placeholder="result" readOnly/>
                    <br/>
                    <input type={"submit"} value="Evaluate" className="btn"/>
                </form>

                
            </div>
        )
    }
}