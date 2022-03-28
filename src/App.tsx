import * as React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { render } from 'react-dom';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import CandidatePage from './pages/CandidatePage';
import VoterPage from './pages/VoterPage';
import PollingPage from './pages/PollingPage';
import ResultPage from './pages/ResultPage';
import PositionPage from './pages/PositionPage';
import LoginPage from './pages/LoginPage';
import MUIAppbar from './pages/MUIAppbar';
import RefSample from './pages/RefSample';
import RefCompoenent from './pages/RefComponent';
import { CreatePortal } from './pages/CreatePortal';
import RefComponent from './components/RefComponent';
import { WithoutMemo } from './components/WithoutMemo';
import { WithMemo } from './components/WithMemo';


class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <div> */}
            <Routes>
              <Route  path="/" element={<DashboardPage  />} />
              <Route  path="/login" element={<LoginPage  />} />
              <Route  path="/dashborad" element={<DashboardPage/>} />
              <Route  path="/candidate" element={<CandidatePage/>} />
              <Route  path="/position" element={<PositionPage/>} />
              <Route  path="/voter" element={<VoterPage/>} />
              <Route  path="/polling" element={<PollingPage/>} />
              <Route  path="/result" element={<ResultPage/>} />
              <Route path="/muiappbar" element={<MUIAppbar/>}/>
              <Route path="/ref" element={<RefSample/>}/>
              <Route path="/ref1" element={<RefCompoenent/>}/>
              <Route path="/portal" element={<CreatePortal/>}/>
              <Route path="/functionContext" element={<RefComponent/>}/>
              <Route path="/WithoutMemo" element={<WithoutMemo/>}/>
              <Route path="/WithMemo" element={<WithMemo/>}/>
              <Route  path="*" element={<NotFoundPage />} />
            </Routes>
          {/* </div> */}
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
export default App;