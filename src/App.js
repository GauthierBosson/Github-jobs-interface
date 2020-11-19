import Navbar from "./components/navbar/Navbar";
import Home from "./containers/home/Home";
import Layout from "./containers/layout/Layout";
import Details from "./containers/details/Details";

import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const queryCache = new QueryCache({
    defaultConfig: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Layout>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={Details} />
          </Switch>
        </Router>
      </Layout>
    </ReactQueryCacheProvider>
  );
}

export default App;
