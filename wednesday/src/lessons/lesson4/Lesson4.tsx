import React from 'react'
import './lesson_4';
import { createPromise, rej, res } from './lesson_4';

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick = {createPromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick = {res}> Resolve Promise</button>
            <button id='btn-reject-promise' onClick = {rej}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;