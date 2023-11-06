import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import axios from "axios";

const Create = () => {
  const [Users, setUsers] = useState([]);
  console.log(Users);

  const postData = () => {
    axios
      .get("https://6539e479e3b530c8d9e8ca18.mockapi.io/crud/api")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    postData();
  }, []);

  return (
    <div>
      <Container>
        <h1 className="mb-3">User Details</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img
                    src={user.avathar}
                    alt=""
                    className="rounded-circle"
                    width={"50"}
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.number}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Create;
