import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { PageVersionTitle } from "../pageVersion/PageVersionTitle";

export const ApplicationVersionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="pageVersions" reference="PageVersion">
          <SelectArrayInput
            optionText={PageVersionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <TextInput
          label="versionDescription"
          multiline
          source="versionDescription"
        />
        <TextInput label="versionName" source="versionName" />
      </SimpleForm>
    </Edit>
  );
};
