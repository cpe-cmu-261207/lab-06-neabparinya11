import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { Component, useState } from "react";
import Result from "./Results";

function Selected() {
    const result = useHistory()
    const [start, setstart] = useState<string>("")
    const [end, setend] = useState<string>("")
    
    
    function onResult(){
        
        const ArrDateStart = Date.parse(start)
        const ArrDataEnd = Date.parse(end)
        if(start === "" || end === ""){
            alert("Please select start and end date correctly")
        }else if(ArrDateStart > ArrDataEnd){
            alert("Please select start and end date correctly")
        }else{
            result.push(`/history/result/?start=${start}&end=${end}`)
        }
        
    }
    
    return (
        <Switch>
            <Route path="/history/select" exact>
                <div className='text-center space-y-3 space-x-3'>
                    <p className='text-2xl font-semibold'>Select historical range</p>
                    <span>From date</span>
                    <input type='date' onChange={e => setstart(e.target.value)}></input>
                    <span>To date</span>
                    <input type='date' onChange={e => setend(e.target.value)}></input>
                    <br />
                    <button type="button" onClick={onResult}>Get data</button>
                </div>
            </Route>
        </Switch>
    );
}
export default Selected;