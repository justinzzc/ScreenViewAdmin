import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { ApplicationTagList } from "./applicationTag/ApplicationTagList";
import { ApplicationTagCreate } from "./applicationTag/ApplicationTagCreate";
import { ApplicationTagEdit } from "./applicationTag/ApplicationTagEdit";
import { ApplicationTagShow } from "./applicationTag/ApplicationTagShow";
import { PageList } from "./page/PageList";
import { PageCreate } from "./page/PageCreate";
import { PageEdit } from "./page/PageEdit";
import { PageShow } from "./page/PageShow";
import { PageVersionList } from "./pageVersion/PageVersionList";
import { PageVersionCreate } from "./pageVersion/PageVersionCreate";
import { PageVersionEdit } from "./pageVersion/PageVersionEdit";
import { PageVersionShow } from "./pageVersion/PageVersionShow";
import { ApplicationVersionList } from "./applicationVersion/ApplicationVersionList";
import { ApplicationVersionCreate } from "./applicationVersion/ApplicationVersionCreate";
import { ApplicationVersionEdit } from "./applicationVersion/ApplicationVersionEdit";
import { ApplicationVersionShow } from "./applicationVersion/ApplicationVersionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Application Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="ApplicationTag"
          list={ApplicationTagList}
          edit={ApplicationTagEdit}
          create={ApplicationTagCreate}
          show={ApplicationTagShow}
        />
        <Resource
          name="Page"
          list={PageList}
          edit={PageEdit}
          create={PageCreate}
          show={PageShow}
        />
        <Resource
          name="PageVersion"
          list={PageVersionList}
          edit={PageVersionEdit}
          create={PageVersionCreate}
          show={PageVersionShow}
        />
        <Resource
          name="ApplicationVersion"
          list={ApplicationVersionList}
          edit={ApplicationVersionEdit}
          create={ApplicationVersionCreate}
          show={ApplicationVersionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
