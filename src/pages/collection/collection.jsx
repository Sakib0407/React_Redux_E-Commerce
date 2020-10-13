import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {  useParams, useLocation } from "react-router-dom"
import Shop_data from '../shop/shop_data'
import './collection.scss'

const Collection = () => {
     const params =useParams()
     const collections = Shop_data
    // const itemName = loc.pathname.split('/')[2]
    const match = collections.filter( item => item.routeName == params.name)
    const items =match[0].items
    console.log(items)
    return (
        <div className='col'>
        <h1 className='title'>{ params.name.toUpperCase()}</h1>
        <div className='prev'>
           {items.map( item => <CollectionItem key={item.id} item={item} category/>)}
        </div>
        </div>
    )
}

export default Collection
