import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ApplicationVersionTitle } from "../applicationVersion/ApplicationVersionTitle";
import { PageTitle } from "../page/PageTitle";

export const PageVersionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="applicationVersion.id"
          reference="ApplicationVersion"
          label="ApplicationVersion"
        >
          <SelectInput optionText={ApplicationVersionTitle} />
        </ReferenceInput>
        <ReferenceInput source="page.id" reference="Page" label="Page">
          <SelectInput optionText={PageTitle} />
        </ReferenceInput>
        <TextInput label="versionSchema" multiline source="versionSchema" />
      </SimpleForm>
    </Edit>
  );
};
