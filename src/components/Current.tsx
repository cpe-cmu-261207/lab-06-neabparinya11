import axios from "axios";
import {useEffect, useState} from "react"
type Datatype ={
    time:{
        updated:string;
    },
    bpi:{
        THB:{
            code:string,
            rate:string;
        }
    }
}
function Currents(){
    const [loading, setloading] = useState(true);
    const [date,setDate] = useState<Datatype|null>(null);
    useEffect(() => {
        axios.get(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
        .then(resp=>{
            setDate(resp.data)
            setloading(false)
        })
        .catch(err=>setloading(false))
    }, [])

    function rendering(){
        if(loading == true){
            return <p className='text-2xl'>Loading ...</p>
        }else{
            return <div><p className='text-2xl'>{date?.bpi.THB.rate.toLocaleString()} THB</p>
            <p> (Last updated {date?.time.updated}) </p></div>
        }
    }
    return (
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
            {rendering()}
      </div>
    );
}
export default Currents;