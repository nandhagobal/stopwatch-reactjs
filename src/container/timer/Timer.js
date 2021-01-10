import React, { Component } from 'react';
import classes from './Timer.css'

class StopTimer extends Component{
    state={
        min:"00",
        sec:"00",
        msec:"00",
        sam:0,
        timeLapse:[],
        loading:false
    }

    addTimer=()=>{
        let sec=Number(this.state.sec);
        let min = Number(this.state.min);
        let msec=Number(this.state.msec);
        msec=msec+1;
        if(msec>=100){
            msec=msec-100;
            sec=sec+1;
            if(sec>=60){
                sec=sec-60;
                min=min+1;
            }
        }
        this.setState({
            msec:msec.toString(),
            min:min.toString(),
            sec:sec.toString()
        })
    }
    

    startHandler=()=>{
        this.interval=setInterval(this.addTimer,10);
        this.setState({loading:true});
    }

    stopHandler=()=>{
        clearInterval(this.interval);
        this.setState({loading:false});
    }

    resetHandler=()=>{
        this.setState({
            min:"00",
            sec:"00",
            msec:"00",
            timeLapse:[]
        })
    }

    onLapseHandler=()=>{
        let str=this.state.min+':'+this.state.sec+':'+this.state.msec;
        let updatedArray=[...this.state.timeLapse];
        updatedArray.push(str);
        this.setState({
            timeLapse:updatedArray
        })
    }

    render(){
        return(
            <div className={classes.outer}>
        <div className={classes.card}>
        <div className={classes.head}>
            stop watch
        </div>
        <div className={classes.time}>
            <span>{this.state.min}</span>:<span>{this.state.sec}</span>:<span>{this.state.msec}</span>
        </div>
        <div className={classes.buttonRow}>
            {this.state.loading?<button onClick={this.stopHandler}>Stop</button>:<button onClick={this.startHandler}>Start</button>}
            <button disabled={this.state.loading} onClick={this.resetHandler}>Reset</button>
            <button onClick={this.onLapseHandler}>Lap</button>
        </div>
        <div className={classes.table}>
        {this.state.timeLapse[0]?
        <table>
                <thead>
                    <tr>
                <th>Lap</th>
                <th>Time</th>
                </tr>
           </thead>
            <tbody>
        {this.state.timeLapse.map((ele,index)=>{
            return <tr key={index+ele}><td>{index+ 1}</td><td>{ele}</td></tr>
        })}
        </tbody>
        </table>:null} 
        </div>
        </div>
        </div>);
    }
}


export default StopTimer;