import axios from "axios";
import { Route, Switch, useHistory, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type DataType ={
    index:number,
    date:string,
    price:any
}

function Result() {
    let query = new URLSearchParams(useLocation().search)
    const start = query.get("start")
    const end = query.get("end")
    const [data,setdata] = useState<DataType[]|null>([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(false)
    useEffect(()=>{
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${start}&end=${end}`)
        .then(resp=>{
            let Datap = [];
            let i =0;
            for (const [key, value] of Object.entries(resp.data.bpi)) {
                
                Datap.push({index:i, date:key, price:value})
                i++;
            }
            setdata(Datap)
            setloading(false)
        })
        .catch(err=>{
            seterror(true);
        })
    },[])
    function rendering(){
        if(loading == true){
            return <p className='text-2xl'>Loading ...</p>
        }else if(error == true){
            return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
        }else{
            return <div>
            <p className='text-xl font-semibold'> ( From {start} To {end} )</p>
            <ul>
                {data?.map(x=><li className='text-xl'>{x.date} - {(x.price).toLocaleString()} THB</li>)}
            </ul>
            </div>
        }
    }
    return (
            <Switch>
                <Route path="/history/result" exact>
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical price</p>
                    {rendering()}
                </div>
                </Route>
            </Switch>
    );
}
export default Result;