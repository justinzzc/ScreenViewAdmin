import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { APPLICATIONVERSION_TITLE_FIELD } from "../applicationVersion/ApplicationVersionTitle";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";

export const PageVersionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
