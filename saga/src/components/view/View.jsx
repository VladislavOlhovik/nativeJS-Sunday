import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from './viewSelector';
import { setResultData } from '../../redux/reducers/searchReducer';

const View = () => {
	let [text, setSearchWord] = useState('');
	const result = useSelector(selectSearch);
	const dispatch = useDispatch();


	const typeWord = (e) => {
		setSearchWord(e.currentTarget.value);
	}

	const getData = () => {
		dispatch(setResultData(text))
	}

	return(
		<div>
			<div>
				<input type="text" value={text} onChange={typeWord}/>
				<button onClick={getData}>Search</button>
			</div>
			<div>
				{result}
			</div>
		</div>
	);
};

export default View;
