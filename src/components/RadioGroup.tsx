import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store';
import {setOption} from '../store/appSlice';

function RadioGroup() {
    const dispatch = useDispatch<AppDispatch>();
    const {selectedOption} = useSelector((state: RootState) => state.app);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setOption(event.target.value));
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Select an Option:</label>
            <div className="flex space-x-4">
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="Option A"
                        checked={selectedOption === 'Option A'}
                        onChange={handleOptionChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Option A</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="Option B"
                        checked={selectedOption === 'Option B'}
                        onChange={handleOptionChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Option B</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="Option C"
                        checked={selectedOption === 'Option C'}
                        onChange={handleOptionChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Option C</span>
                </label>
            </div>
        </div>
    )
}

export default RadioGroup;