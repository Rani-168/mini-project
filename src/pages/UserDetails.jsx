import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams(); // get dynamic id from URL

  return (
    <div>
      <h1>👤 User Details</h1>
      <p>You are viewing user with ID: {id}</p>
    </div>
  );
}

export default UserDetails;