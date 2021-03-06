import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = () => {

    const [value, setValue] = useState('');
    const handleSubmit = event =>{
        event.preventDefault();
        console.log('value', value);
        setValue('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
                <h1>Add new todo</h1>
                <Input value={value} setValue={setValue} style={{marginRight: 5}}/>
                <Button disabled={value.trim().length === 0} htmlType="submit">Foo</Button>
            </form>
        </>
    );
};

export default Form;