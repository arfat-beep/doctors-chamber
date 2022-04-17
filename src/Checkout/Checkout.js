import React from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Checkout = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <Container>
      <p>
        Hello {user?.displayName}, <br />
        Thank you for choosing me for your operation. I'll let you know time and
        date when I'm free.
      </p>
    </Container>
  );
};

export default Checkout;
