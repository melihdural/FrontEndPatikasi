import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends, address }) {
    
    if (!isLoggedIn){
        return <><h1>Giriş Yapınız!...</h1></>
    }

    return (
        <>
            <h1>
                {`${name} ${surname} (${age})`}
            </h1>
            {address.title} {address.zip}
            <br/>
            <br/>

            {/*{friends && friends.map((friend) => {*/}
            {/*    return (*/}
            {/*        <div  key={friend.id} > {friend.name}</div>*/}
            {/*    );*/}
            {/*})}*/}

            {friends.map((friend, index) => {
                return (
                    <div  key={index} > {friend}</div>
                );
            })}
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired, //isRuquired veri tipinin olmasını zorunlu kılar
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, //oneOfType çoklu veri tipini kabul etmemizi sağlar.
    friends: PropTypes.array,
    address: PropTypes.shape({
        //shape obje tipindeki bir değişkenin altındaki veri tiplerini tanımlamak için kullanılır
        title: PropTypes.string,
        zip: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
}


User.defaultProps = {
    name: "Name",
    isLoggedIn: false,
    surname: "Surname",
    age: "--",
    address: "--"
}
    
export default User;