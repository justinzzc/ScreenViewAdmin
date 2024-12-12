import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATIONVERSION_TITLE_FIELD } from "../applicationVersion/ApplicationVersionTitle";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";

export const PageVersionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PageVersions"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="versionSchema" source="versionSchema" />{" "}
      </Datagrid>
    </List>
  );
};
