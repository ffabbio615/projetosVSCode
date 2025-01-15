import './Home.scss';
import { useState, useEffect } from 'react';


export default function Home(){

    const [advertising, setAdvertising] = useState(
        {
            advertising1: true,
            advertising2: false,
            advertising3: false
        }
    );

    function handleAdvertising(number){
        if (number === 1){ setAdvertising({ advertising1: true, advertising2: false, advertising3: false }); } else
        if (number === 2){ setAdvertising({ advertising1: false, advertising2: true, advertising3: false }); } else
        if (number === 3){ setAdvertising({ advertising1: false, advertising2: false, advertising3: true }); }
    }

    useEffect(() => {
        const interval = setInterval(() => {
          
            if(advertising.advertising1){
                setAdvertising({ advertising1: false, advertising2: true, advertising3: false });
            } else
            if(advertising.advertising2){
                setAdvertising({ advertising1: false, advertising2: false, advertising3: true });
            } else
            if(advertising.advertising3){
                setAdvertising({ advertising1: true, advertising2: false, advertising3: false });
            }

        }, 5000);
        return () => clearInterval(interval);
      }, [advertising]);
    

    return(
        <>
        <main className="advertising-container">
            <div className="advertising-buttons-container">
                <button onClick={()=> handleAdvertising(1)} className={`${advertising.advertising1 ? 'button-activated' : 'button-deactivated'}`}></button>
                <button onClick={()=> handleAdvertising(2)} className={`${advertising.advertising2 ? 'button-activated' : 'button-deactivated'}`}></button>
                <button onClick={()=> handleAdvertising(3)} className={`${advertising.advertising3 ? 'button-activated' : 'button-deactivated'}`}></button>
            </div>
            <div className={`advertising1 ${advertising.advertising1 ? 'enabled' : 'disabled'}`}></div>
            <div className={`advertising2 ${advertising.advertising2 ? 'enabled' : 'disabled'}`}></div>
            <div className={`advertising3 ${advertising.advertising3 ? 'enabled' : 'disabled'}`}></div>
        </main>
        </>
    )
}