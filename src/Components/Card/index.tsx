interface CardProps{
    name: string;
    age: number;
    hobby: string;
}

export default function Card({name, age, hobby}: CardProps){

    return(
        <div className="Card">
            <h3>{name}</h3>
            <h4>{age}</h4>
            <h4>{hobby}</h4>
        </div>
    )
}