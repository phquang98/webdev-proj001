import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit: React.FC = (props) => {
  return (
    <Edit title="Editing user" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
