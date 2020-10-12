import React from 'react';
import SHOP_DATA from './shop_data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { useParams } from "react-router-dom"

const ShopPage = () =>{
    const { id } =useParams()
    console.log(id)
        const collections = SHOP_DATA


        return (
            <div>
                {
            collections.map( ({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} { ...otherCollectionProps } />
            ) 
            )}
            </div>
        );
    
}

export default ShopPage;