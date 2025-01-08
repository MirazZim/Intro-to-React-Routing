import { Link } from "react-router-dom";

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
            
            <h2>{name}</h2>
            <p>{email}</p>
            <span>{phone}</span>
                <div>
                <Link to = {`/user/${id}`}>Show Details</Link>
                </div>
            

        </div>
    );
};

export default User;