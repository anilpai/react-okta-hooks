import React from "react";
import { AuthContext } from "../../AuthProvider";

const Profile = () => {

  return (
    <AuthContext.Consumer>
      {value => <pre>{JSON.stringify(value, null, 4)}</pre>}
    </AuthContext.Consumer>
  );
};

export default Profile;
