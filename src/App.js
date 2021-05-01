import './App.css';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';


function App() {
	return (
		<div>
			<Router>
				<Link to={'/user'}>Users</Link>
				<br/>
				<Link to={'/posts'}>posts</Link>
				<Switch>
					<Route path={'/user'} render={() => (<Users/>)}/>
					<Route path={'/posts'} render={() => (<Posts/>)}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
