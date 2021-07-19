import { useState, useEffect } from 'react'
//componente:
import { getGifs } from '../helpers/getGifs' ;


export const UseFetchGifs = ( category ) => {

   const [state, setState] = useState({
      data: [],
      loading : true
   });

   useEffect( () =>{
      getGifs( category )
         .then( imgs => {
            setState({
               data: imgs,
               loading: false
            });
         });

   }, [category] ) ;

   return state ; // { data:[], loading: true };



};

// useEffect( ()=>{
//    getGifs( category )
//       .then( imgs => setImages( imgs )) ; // igual a : ,then( setImages), por primer argumento enviado a funcion con un solo argumento.
// }, [category] );
//
