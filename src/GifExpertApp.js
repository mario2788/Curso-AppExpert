import React, {useState} from 'react';
// componentes:
import {AddCategory} from './components/AddCategory' ;
import {GifGrid}     from './components/GifGrid' ;

// Para servir en npm server:
// installar: sudo npm install --global http_server
// correr: http-server -o

   const GifExpertApp = ()=>{
      const [categories, setCategories] = useState(['One Punch','Dargon ball']);

      // const handleAdd = () => {
      //    // setCategories( ['Hunter', ...categories] );
      //    setCategories( obj =>[ 'Hunter',...obj] );
      // }

      return (
         <>
            <h1> Gif Expert App </h1>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
               {
                  categories.map( category =>
                     <GifGrid
                        key = {category}
                        category={category}
                     />
                  )
               }
            </ol>
         </>
      );
   };

export default GifExpertApp;
