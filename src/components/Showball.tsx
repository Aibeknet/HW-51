import React from "react";
import './Showball.css';

type ShowballProps = {
    number: number;
};
const Showball: React.FC<ShowballProps> = ({number}) => {
    return (
        <div className="ball">{number}</div>
    );
};

export default Showball;