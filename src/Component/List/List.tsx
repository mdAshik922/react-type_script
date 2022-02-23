import React from 'react';

const List = ({items, onClick }:{
        items: string[];
        onClick: (item: string) => void;
    }) => {
    return (
        <div>
           {
               items.map((item, index)=>(
                   
               ))
           }
        </div>
    );
};

export default List;