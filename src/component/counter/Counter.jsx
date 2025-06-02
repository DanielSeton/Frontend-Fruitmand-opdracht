import Button from "../button/Button.jsx";

function Counter({setFruitCount, fruitCount}) {
    return (
        <>
            <Button
                type="button"
                isDisabled={fruitCount === 0}
                onClick={() => setFruitCount(fruitCount - 1)}
                label="-"
            />
            <p>{fruitCount}</p>
            <Button
                type="button"
                onClick={() => setFruitCount(fruitCount + 1)}
                label="+"
            />
        </>
    );
}

export default Counter;