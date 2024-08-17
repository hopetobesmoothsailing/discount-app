import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store';
import {setNotes} from '../store/appSlice';

function BasicNote() {
    const dispatch = useDispatch<AppDispatch>();
    const {notes} = useSelector((state: RootState) => state.app);

    const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setNotes(event.target.value));
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Notes:</label>
            <textarea
                value={notes}
                onChange={handleNotesChange}
                className="w-full border border-gray-300 rounded-md p-2"
                rows={4}
                placeholder="Enter your notes here"
            />
        </div>
    )
}

export default BasicNote;