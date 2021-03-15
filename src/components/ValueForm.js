import { useState } from 'react'

export default function ValueForm(props) {
    const [inputs, setInputs] = useState({ value: "", description: "" })

    function handleSubmit() {
    }

    function handleChange() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Your Value/Strength"
                name="value"
                value={inputs.value}
                onChange={handleChange}
            />
            <textarea 
                type="text"
                placeholder="Value/Strength description..."
                name="description"
                value={inputs.description}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
}