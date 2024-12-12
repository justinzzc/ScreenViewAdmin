import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPLICATIONVERSION_TITLE_FIELD } from "./ApplicationVersionTitle";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const ApplicationVersionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="releaseDate" source="releaseDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="versionDescription" source="versionDescription" />
        <TextField label="versionName" source="versionName" />
        <ReferenceManyField
          reference="PageVersion"
          target="applicationVersionId"
          label="PageVersions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="ApplicationVersion"
              source="applicationversion.id"
              reference="ApplicationVersion"
            >
              <TextField source={APPLICATIONVERSION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Page" source="page.id" reference="Page">
              <TextField source={PAGE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="versionSchema" source="versionSchema" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
