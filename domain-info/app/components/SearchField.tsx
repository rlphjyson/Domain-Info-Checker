import React, { useState, ChangeEventHandler } from 'react';

type SearchFieldProps = {
    onSearch: (textInput: string) => void;
};


const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
    const [textInput, setTextInput] = useState<string>('');

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTextInput(event.target.value);
    };

    const handleSearch = () => {
        onSearch(textInput);
    };
    return (
        <div className='flex flex-row gap-4 justify-center'>
            <input
                type="text"
                placeholder="Enter domain name..."
                value={textInput}
                onChange={handleInputChange}
                className="input input-bordered w-96 " />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
    )

};

export default SearchField;


