import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppHeader from "./components/AppHeader";
import SplitPane, { Pane } from "react-split-pane";
import InformationViews from "./components/InformationViews";
import { InformationDataProvider } from "./providers/InformationDataProvider";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" hideProgressBar />
      <InformationDataProvider>
        <UserProfileProvider>
          <Router>
            <AppHeader />
            <SplitPane
              style={{ overflow: "auto" }}
              split="vertical"
              minSize={50}
              defaultSize="75%"
              onChange={(size) => localStorage.setItem("splitPos", size)}
            >
              <div>
                <ApplicationViews />
              </div>
              <div>
                <InformationViews />
              </div>
            </SplitPane>
          </Router>
        </UserProfileProvider>
      </InformationDataProvider>
    </div>
  );
}

export default App;
