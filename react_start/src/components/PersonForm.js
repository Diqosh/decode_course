import {useState} from "react";
import {Person} from "../models";

function PersonForm(props) {
    const [FormData, setFormData] = useState(Person('', '' , '' , ''))

    const onChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value,
            [e.target.age]: e.target.value,
            [e.target.gpa]: e.target.value
        })
    }

    let print = (e) => {
        e.preventDefault()
        props.addPerson({
            ...FormData
        })

        setFormData({
            name: '',
            age: '',
            gpa: ''
        })



    }

    let personFormDiv =
        <form onSubmit={print}>
            <input type="text" name="name" placeholder={'name'} value={FormData.name} onChange={onChange}/>
            <input type="number" name="age" placeholder={'age'} value={FormData.age} onChange={onChange}/>
            <input type="number" name="gpa" placeholder={'gpa'} value={FormData.gpa} onChange={onChange}/>
            <button type="submit">Submit</button>
        </form>



    return (

        <div className="PersonFro">
            {personFormDiv}
        </div>
    );
}

export default PersonForm;