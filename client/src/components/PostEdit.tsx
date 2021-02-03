import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const PostEdit: React.FC = (props) => {
  return (
    <Edit title="Editing post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiine source="body" />
        <DateInput label="Publishtinggngngng" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
