import React from "react";

function Header ({number, data}) {
    console.log("Yenilendi")
    return (
        <div>
            <h1>{`Hello React - ${number}`}</h1>
            <code>{JSON.stringify(data)}</code>
        </div>
    )
}

export default React.memo(Header); // React.memo ile sınıfın sadece o sınıf içerisinde bir değişiklik olduysa render edilmesini istediğimizde kullanırız.