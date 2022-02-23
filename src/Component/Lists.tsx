import React from 'react';

const Lists = () => {
    const item: string[] = ["Tammim", "Ashik"];
const onClick = (text: string): void=> alert(text);
    return (
        <div>
            <List items={items} onClick={onClick} />
        </div>
    );
};

export default Lists;