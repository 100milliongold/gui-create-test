import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React from "react";
import { QIcon } from "@nodegui/nodegui";
import nodeguiIcon from "../assets/nodegui.jpg";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import InputData from "./containers/InputData";
const store = createStore(rootReducer);

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Window
          windowIcon={winIcon}
          windowTitle="테스트"
          minSize={minSize}
          styleSheet={styleSheet}
        >
          <View style={containerStyle}>
            <InputData />
          </View>
        </Window>
      </Provider>
    );
  }
}

const containerStyle = `
  flex: 1; 
`;

const styleSheet = `
`;

export default hot(App);
