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
        axios.post()

        this.setState({
            txtOperand1: e.target.value
        });
    }
    render(){
        return(
            <div className="container">
                <form>
                    <input type="text" name="operand1" id="operand1" />
                    <input type="text" name="operand2" id="operand2" />
                    <input type={"text"} name="result"/>
                </form>
                <div className="keypad">
                    <button id="clear">Clear</button>
                    
                    <button>&divide;</button>
                    <button>&times;</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>&ndash;</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>+</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>&times; &times;</button>
                    <button>0</button>
                    <button>log</button>
                    <button>ln</button>
                    <button>=</button>


                </div>
                
            </div>
        )
    }
}