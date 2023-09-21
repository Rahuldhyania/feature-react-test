import React, { useState } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';
import '../App.css';



const MainScreen = () => {
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);

    return (
        <div className="main-screen">
            <div className="button-container">
                <button
                    style={{ backgroundColor: '#46139f' }}
                    onClick={() => setShowModalA(true)}
                >
                    Button A
                </button>
                <button
                    style={{ backgroundColor: '#ff7f50' }}
                    onClick={() => setShowModalB(true)}
                >
                    Button B
                </button>
            </div>

            {showModalA && (
                <ModalA
                    closeModal={() => setShowModalA(false)}
                    openModalB={() => setShowModalB(true)}
                />
            )}
            {showModalB && (
                <ModalB
                    closeModal={() => setShowModalB(false)}
                    openModalA={() => setShowModalA(true)}
                />
            )}
        </div>
    );
};

export default MainScreen;
