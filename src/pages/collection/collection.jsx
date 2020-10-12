import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {  useParams, useLocation } from "react-router-dom"

const Collection = ({}) => {
    
    const   param  = useParams()
    const loc =useLocation()
    console.log( param , loc )
    return (
        <div>
           sed lyf
        </div>
    )
}

export default Collection
