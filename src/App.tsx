import React from 'react';
import RadioGroup from "./components/RadioGroup";
import BasicNote from "./components/BasicNote";
import DiscountCode from "./components/DiscountCode";

function App() {

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Discount Application</h1>
                <RadioGroup/>
                <DiscountCode/>
                <BasicNote/>
            </div>
        </div>
    );
}

export default App;
