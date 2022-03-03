import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setinputValue] = useState('');

	const handleInputChange = (e) => {
		setinputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategories((cats) => [inputValue, ...cats]);
			setinputValue('');
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="buscar categoria"
				onChange={handleInputChange}
			/>
		</form>
	);
};

// export const AddCategory = ({ setCategories }) => {

// 	const newCategory = useRef();

// 	const handleAdd = (e) => {
// 		if (newCategory.current.value.length >= 2) {
// 			setCategories((cat) => [...cat, newCategory.current.value]);
// 			newCategory.current.value = '';
// 		}
// 	};

// 	return (
// 		<div className="wrapper">
// 			<input
// 				type="text"
// 				ref={newCategory}
// 				placeholder="buscar categoria"
// 			/>
// 			<button onClick={handleAdd} className="addButton">
// 				buscar
// 			</button>
// 		</div>
// 	);
// };

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
