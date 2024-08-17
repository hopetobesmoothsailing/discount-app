import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store';
import {setDiscountCode} from '../store/appSlice';

function DiscountCode() {
    const dispatch = useDispatch<AppDispatch>();
    const {discountCode} = useSelector((state: RootState) => state.app);

    const [generatedCode, setGeneratedCode] = useState<string>('');

    const handleDiscountCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setDiscountCode(event.target.value));
    };

    const generateDiscountCode = () => {
        setGeneratedCode('NEWCODE123');
    };

    const validateDiscountCode = () => {
        return /^DISCOUNT2024$/.test(discountCode);
    };

    return (
        <>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Discount Code:</label>
                <input
                    type="text"
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter discount code"
                />
                {discountCode && !validateDiscountCode() && (
                    <p className="text-red-500 text-xs mt-2">Invalid discount code</p>
                )}
            </div>

            <button
                onClick={generateDiscountCode}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            >
                Generate Discount Code
            </button>

            {generatedCode && (
                <div className="mb-4">
                    <p className="font-bold">Generated Code:</p>
                    <p className="text-lg">{generatedCode}</p>
                </div>
            )}
        </>
    )
}

export default DiscountCode;