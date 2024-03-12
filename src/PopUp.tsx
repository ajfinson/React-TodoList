import React, { Dispatch } from 'react';
 import { useRecoilState } from 'recoil';
 import { todoAtom } from './todoAtom';

interface PopUpProps {
    indexToDelete: number;
    indexOfItem: number;
    message: string;
    PopUpOpen: boolean;
    setShowPopUp: Dispatch<React.SetStateAction<boolean>>;
}

const PopUp: React.FC<PopUpProps> = ({ message, PopUpOpen,setShowPopUp,indexToDelete, indexOfItem  }) => {
//    const [showPopUp, setShowPopUp] = React.useState(PopUpOpen);
    const [list, setList] = useRecoilState(todoAtom);
//    const [list, setList] = React.useState<string[]>([]);

    
    const handleConfirm = () => {
        setList(list.filter((item) => item !== message));
        setShowPopUp(false);

    };
    const handleCancel = () => {
        setShowPopUp(false);
    };

    return (
        <>
        {indexOfItem===indexToDelete?(<>
        {PopUpOpen?(
        <div className="modal">
            <div className="modal-content">
                <h2>Do you want to delete: {message}</h2>
                <div className="modal-buttons">
                    <button onClick={handleConfirm}>Yes</button>
                    <button onClick={handleCancel}>No</button>
                </div>
            </div>
        </div>
        ):null}</>
        ):null}
        </>
    );
};

export default PopUp;
