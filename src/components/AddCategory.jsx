import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    // console.log(setCategories);

    const [inputValue, setInputValue] = useState("");

    const onInputChanged = (event) => {
        setInputValue(event.target.value);
    };

    const onsubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // setCategories(cat => [...cat, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
        // console.log(inputValue);
    }


    return (
        <form onSubmit={(event) => onsubmit(event)}>
            <input
                type="text"
                placeholder=" Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChanged(event)}
            />
        </form>
    );
};
