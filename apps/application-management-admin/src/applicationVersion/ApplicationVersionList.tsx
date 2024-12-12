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
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const ApplicationVersionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ApplicationVersions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="versionName" source="versionName" />{" "}
      </Datagrid>
    </List>
  );
};
