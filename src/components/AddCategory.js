import React, {useState} from 'react';
import PropTypes from 'prop-types' ;

export const AddCategory = ( {setCategories} ) => {

   const [inputValue , setInputValue] = useState('Intro categorias') ;
   const handleInputchange = (e) => {
      setInputValue( e.target.value );
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submit Hecho');
      if( inputValue.trim().length > 2){
         setCategories( obj =>[ inputValue, ...obj ] );
         setInputValue('');
      };
   };
   return(
      <form onSubmit={ handleSubmit }>
         <input
            type="text"
            value = {inputValue}
            onChange={  handleInputchange }
         />
      </form>

   );
};

AddCategory.propTypes = {
   setCategories : PropTypes.func.isRequired
}
