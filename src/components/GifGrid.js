import React from 'react';
// componentes:
import {UseFetchGifs}from '../hooks/useFetchGifs' ;
import {GifGridItem} from './GifGridItem' ;

// import PropTypes from 'prop-types';

export const GifGrid = ( {category} ) => {

   const { data, loading } = UseFetchGifs( category );

   return (
         <>
            <h3 className="animate__animated animate__slideInDown ">{ category } </h3>

            { loading && <p> Loading </p> }

            <div className="card-grid">
                  {
                     data.map ( img =>
                        <GifGridItem
                           key={ img.id }
                           { ...img }
                        />
                     )
                  }
            </div>
         </>
   );
};

// .propTypes = {};
