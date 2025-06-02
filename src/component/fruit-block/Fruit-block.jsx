import './Fruit-block.css'
import Counter from "../counter/Counter.jsx";

function FruitBlock({label, fruitCount, setFruitCount}) {

    return(
        <article className="fruit-block">
            <h2>{label}</h2>
            <Counter
                fruitCount={fruitCount}
                setFruitCount={setFruitCount}
            />
        </article>
    )
}

export default FruitBlock;