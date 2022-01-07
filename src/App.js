import { Route, Switch } from 'react-router-dom'

import { AllMeetup } from './pages/AllMeetups';
import { NewMeetup } from './pages/NewMeetup';
import { FavoritesMeetup } from './pages/Favorites'
import { Layout } from './components/layout/Layout';
function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetup />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetup />
          </Route>
          <Route path="/favorites">
            <FavoritesMeetup />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
