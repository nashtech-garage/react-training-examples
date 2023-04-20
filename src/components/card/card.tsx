import Button from "../button/button";

import './card.css';
import {useState} from "react";

const Card = ({data, btn, left, right, middle, action, render, children}: any)=> {
    const [state] = useState(2)
    const onClick = () => console.log('Button on this card is just clicked')

    /**
     * Basic
     */
    return(
        <>
            Card {data.index}
            <div className='card'>
                <label>BELL PEPPER</label>
                <Button label='test' onClick={onClick}></Button>
            </div>
        </>
    );

    /**
     * Injected
     */
    // return(
    //     <>
    //         Card {data.index}
    //         <div className='card'>
    //             <btn.com {...btn.config} onClick={onClick}></btn.com>
    //         </div>
    //     </>
    // );

    // return(
    //     <>
    //         Card {data.index}
    //         <div className='card'>
    //             {action}
    //         </div>
    //     </>
    // );

    // return(
    //     <>
    //         Card {data.index}
    //         <div className='card'>
    //             {render(state)}
    //         </div>
    //     </>
    // );


    /**
     * Transclusion
     */
    // return(
    //     <>
    //         Card {data.index}
    //         <div className='card'>
    //             { children }
    //         </div>
    //     </>
    // );

    /**
     * Slots
     */
    // return(
    //     <>
    //         Card {data.index}
    //         <div className='container'>
    //             <div className='left'>
    //                 { left }
    //             </div>
    //             <div className='middle'>
    //                 { middle }
    //             </div>
    //             <div className='right'>
    //                 { right }
    //             </div>
    //         </div>
    //     </>
    // );

    /**
     * Function as Child
     */
    return (
        <>
            Card {data.index}
            <div className='card'>
                { children() }
            </div>
        </>
    )

}

export default Card;