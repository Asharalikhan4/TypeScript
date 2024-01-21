import { ReactNode } from "react";

type counterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    children: ReactNode;
}

const counter = ({ setCount, children }: counterProps) => {
    
    return (
        <div>
            <h1>{children}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </div>
    )
}

export default counter;