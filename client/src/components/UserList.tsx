import React from "react";
import { List, Datagrid, TextField, EmailField, DateField, EditButton, DeleteButton } from "react-admin";

const UserList: React.FC = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />

        <DateField source="publishedAt" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
