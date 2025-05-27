import './Fruit-block.css'
import Counter from "../counter/Counter.jsx";

function FruitBlock({label, fruitName}) {

    return(
        <article className="fruit-block">
            <h2>{label}</h2>
            <Counter
                fruitCount={0}
                setFruitCount={fruitName}
            />
        </article>
    )
}

export default FruitBlock;