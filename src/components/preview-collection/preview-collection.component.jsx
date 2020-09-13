import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'
const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item,idx) => idx < 4).map(({id,...otherItemprops}) => (
                <CollectionItem key={id} {...otherItemprops} />

            ))}
                    </div>
    </div>
)

export default CollectionPreview;