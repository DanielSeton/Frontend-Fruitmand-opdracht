import './App.css'
import FruitBlock from "./component/fruit-block/Fruit-block.jsx";
import Button from "./component/button/Button.jsx";
import {useState} from "react";
import InputField from "./component/Input-field/InputField.jsx";

function App() {

    const [strawberryCount, setStrawberry] = useState(0);
    const [bananaCount, setBanana] = useState(0);
    const [appleCount, setApple] = useState(0);
    const [kiwiCount, setKiwi] = useState(0);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
    }

    function resetFruits() {
        setStrawberry(0);
        setBanana(0);
        setApple(0);
        setKiwi(0);
    }

    return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <FruitBlock
            label="Aarbeien"
            fruitCount={strawberryCount}
            setFruitCount={setStrawberry}
        />
        <FruitBlock
            label="Bananen"
            fruitCount={bananaCount}
            setFruitCount={setBanana}
        />
        <FruitBlock
            label="Appels"
            fruitCount={appleCount}
            setFruitCount={setApple}
        />
        <FruitBlock
            label="Kiwi's"
            fruitCount={kiwiCount}
            setFruitCount={setKiwi}
        />
        <Button
            type="reset"
            label="Reset"
            onClick={resetFruits}
        />
        <hr></hr>
        <form onSubmit={handleSubmit}>
            <section>
            <InputField
                label="Voornaam"
                name="firstname"
                inputType="text"
                value={firstname}
                changeHandler={setFirstname}/>
            </section>
            <section>
            <InputField
                label="Achternaam"
                name="lastname"
                inputType="text"
                value={lastname}
                changeHandler={setLastname}/>
            </section>
            <section>
            <InputField
                label="Leeftijd"
                name="age"
                inputType="number"
                value={age}
                changeHandler={setAge}/>
            </section>
            <section>
            <InputField
                label="Postcode"
                name="zipcode"
                inputType="text"
                value={zipcode}
                changeHandler={setZipcode}/>
            </section>
            <label>Bezorgfrequentie</label>
            <section>
            <select
                name="deliveryFrequency"
                id="deliveryFrequency-field"
                value={deliveryFrequency}
                onChange={(e) => toggleDeliveryFrequency(e.target.value)}>
                <option value="week">Iedere week</option>
                <option value="other-week">Om de week</option>
                <option value="other-month">Iedere maand</option>
            </select>
            </section>
            <section>
                <InputField
                    label="Overdag"
                    name="deliveryTimeslot"
                    inputType="radio"
                    value="daytime"
                    changeHandler={toggleDeliveryTimeslot}/>
                <InputField
                    label="'s Avonds"
                    name="deliveryTimeslot"
                    inputType="radio"
                    value="nighttime"
                    changeHandler={toggleDeliveryTimeslot}/>
            </section>
            <section>
                <InputField
                    label="Postcode"
                    name="zipcode"
                    inputType="text"
                    value={zipcode}
                    changeHandler={setZipcode}/>
            </section>
            <label>
                Opmerking
            </label>
            <section>
                <textarea
                    name="remark"
                    id="remark-field"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}>
                </textarea>
            </section>
            <section>
            <InputField
                label="Ik ga akkoord met de voorwaarden"
                name="agree"
                inputType="checkbox"
                value={agreeTerms}
                changeHandler={toggleAgreeTerms}/>
            </section>
            <section>
            <Button
                type="submit"
                label="Verzenden"
            />
            </section>
        </form>
    </>
  )
}

export default App
