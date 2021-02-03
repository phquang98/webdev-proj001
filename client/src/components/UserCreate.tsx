import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate: React.FC = (props) => {
  return (
    <Create title="Creating a post..." {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
