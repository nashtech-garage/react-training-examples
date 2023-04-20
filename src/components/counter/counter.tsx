import {useContext, useEffect, useMemo, useRef, useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>Click Me</button>
        </div>
    )
}

export default Counter;

export const useSimpleHook = () => {
    let userName = 'FE Team';
    let userDesignation = 'Trainer';
    // console.log(userName);
    return [userName, userDesignation];
};

