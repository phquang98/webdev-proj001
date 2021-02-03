import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const PostCreate: React.FC = (props) => {
  return (
    <Create title="Creating a post..." {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Publish Time:" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
