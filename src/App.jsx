import './App.css'
import FruitBlock from "./component/fruit-block/Fruit-block.jsx";
import Button from "./component/button/Button.jsx";
import {useState} from "react";
import InputField from "./component/Input-field/InputField.jsx";

function App() {

    const counterValue = useState(0);

    function resetFruits() {
        setStrawberries(0);
    }

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

    return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <FruitBlock
            label="Aarbeien"
        />
        <FruitBlock
            label="Bananen"
        />
        <FruitBlock
            label="Appels"
        />
        <FruitBlock
            label="Kiwi's"
        />
        <Button
            label="Reset"
            onClick={resetFruits}
        />
        <form onSubmit={handleSubmit}>
            <section>
                <InputField name="firstname" label="Voornaam" inputType="text" value={firstname} changeHandler={setFirstname} />
            </section>
            <section>
                <InputField name="lastname" label="Achternaam" inputType="text" value={lastname} changeHandler={setLastname} />
            </section>
            <section>
                <InputField name="age" label="Leeftijd" inputType="number" value={age} changeHandler={setAge} />
            </section>
            <section>
                <InputField name="zipcode" label="Postcode" inputType="text" value={zipcode} changeHandler={setZipcode} />
            </section>
            <section>
                <label htmlFor="delivery-field">Bezorgfrequentie</label>
            </section>
            <section>
                <select
                    name="delivery" id="delivery-field"
                    value={deliveryFrequency}
                    onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                >
                    <option value="week">Iedere week</option>
                    <option value="two-week">Om de week</option>
                    <option value="month">Iedere maand</option>
                </select>
            </section>
            <section>
                <input
                    type="radio"
                    value="daytime"
                    name="timeslot"
                    id="timeslot-field-daytime"
                    checked={deliveryTimeslot === 'daytime'}
                    onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                />
                <label htmlFor="timeslot-field-daytime">Overdag</label>
                <input
                    type="radio"
                    value="evening"
                    checked={deliveryTimeslot === 'evening'}
                    onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                    name="timeslot"
                    id="timeslot-field-evening"
                />
                <label htmlFor="timeslot-field-evening">Avond</label>
            </section>
            <section>
                <label htmlFor="remark-field">Opmerking</label>
                <textarea
                    name="remark"
                    id="remark-field"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    rows={6}
                    cols={40}
                />
            </section>
            <section>
                <input
                    type="checkbox"
                    name="agree"
                    id="agree-field"
                    value={agreeTerms}
                    onChange={(e) => toggleAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
            </section>

            <Button type="submit">Verzend</Button>
        </form>
    </>
  )
}

export default App
