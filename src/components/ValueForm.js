import { useState } from 'react'

export default function ValueForm(props) {
    const [inputs, setInputs] = useState({ value: "", description: "" })

    return (
        <form>
            <input 
                type="text"
                placeholder="Your Value/Strength"
                name="value"
                value={inputs.value}
            />
            <textarea 
                type="text"
                placeholder="Value/Strength description..."
                name="description"
                value={inputs.description}
            />
            <input type="Submit" />
        </form>
    )
}