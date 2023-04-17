import React from 'react';

function Content({header}) {
    return (
        <div className={"content"}>
            <h1>{header}</h1>
        </div>
    );
}

export default Content;