import Navbar from "./components/navbar/Navbar";
import Home from "./containers/home/Home";
import Layout from "./containers/layout/Layout";
import Details from "./containers/details/Details";
import Search from "./containers/search/Search";

import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const queryCache = new QueryCache({
    defaultConfig: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  queryCache.invalidateQueries("customJob");

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <Layout>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={Details} />
            <Route path="/search" component={Search} />
          </Switch>
        </Layout>
      </Router>
    </ReactQueryCacheProvider>
  );
}

export default App;
