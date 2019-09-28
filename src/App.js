import React from "react";

import Root from "pages/Root";
import {DataProvider} from "contexts/DataContext";

const App = () => <DataProvider><Root /></DataProvider>;

export default App;
