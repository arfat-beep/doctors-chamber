import React from "react";
import { Accordion, Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <Accordion
      defaultActiveKey="0"
      className="w-50 mx-auto
    my-5"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Authorization vs Authentication</Accordion.Header>
        <Accordion.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Authentication</th>
                <th>Authorization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  This verifies <strong>users</strong>
                </td>
                <td>This provides access what user can access</td>
              </tr>
              <tr>
                <td>It's work with passwords, OTP etc.</td>
                <td>
                  It's work with through out setting that implemented in system
                </td>
              </tr>
              <tr>
                <td>It is the first word for a good identy system</td>
                <td>This works after authentication</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Why we are using firebase? Some alternative of firebase
        </Accordion.Header>
        <Accordion.Body>
          <li>
            <strong>Why we are using firebase?</strong> <br />
            <div style={{ padding: "20px" }}>
              <b>Ans :</b>We can use this for multipurpose like
              authentication,hosting,database etc.We know that, this is
              authorized by google which is most trusted search engine, so it's
              obvious that it secure than other platform.There is another reason
              that it's easy to implement and use
            </div>
          </li>
          <li>
            <strong>Some alternative of firebase</strong> <br />
            <b style={{ padding: "20px" }}>Ans :</b>
            <ol>
              <li>Auth0</li>
              <li>AWS Amplify</li>
              <li>Kuzzle</li>
              <li>Couchbase</li>
              <li>NativeScript</li>
            </ol>
          </li>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Firebase service accept authentication
        </Accordion.Header>
        <Accordion.Body>
          <p>There are many service provides by firebase</p>
          <ol>
            <li>Cloud Firestore</li>
            <li>Crashlytics</li>
            <li>In-App Messaging</li>
            <li>Hosting</li>
            <li>Google Analytics</li>
            <li>Realtime Database</li>
            <li>Cloud Storage</li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blogs;
