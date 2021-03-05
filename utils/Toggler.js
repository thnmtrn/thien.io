import { useState } from 'react'

function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const toggle = ( ) => {
        setIsHappy(!isHappy);
    };
    return (
        <div>
            <h1 onClick={toggle}>{isHappy ? "happy" : "sad"}</h1>
        </div>
    )
}

export default Toggler;