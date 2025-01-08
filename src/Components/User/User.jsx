const User = ({user}) => {
    const {id,name, email, phone} = user;

    const userStyle = {
        border: '2px solid yellow',
        padding : '5px',
        borderRadius: '20px',
        margin:'2px'
    }
    return (
        <div style={userStyle}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <p>{email}</p>
            <span>{phone}</span>

        </div>
    );
};

export default User;