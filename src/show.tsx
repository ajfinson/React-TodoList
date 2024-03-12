import { atom, useRecoilValue ,useRecoilState} from 'recoil';
import React from 'react';
import { todoAtom } from './todoAtom';


// Model component
const Model = () => {
    // Access the atom using useRecoilState
    const todo = useRecoilState(todoAtom);
   
        const handleConfirm = () => {
            
        };
        const handleCancel = () => {

        }
            
    
    return (

        <div>
            <h1>Todo: {todo}</h1>
        </div>
    );
};

export default Model;
