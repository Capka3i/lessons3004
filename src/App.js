import './App.css';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import Users1 from './components/createElement/Users0';


function App() {
	return (
		<div>
			<Router>
				<Link to={'/user'}>Users</Link>
				<br/>
				<Link to={'/posts'}>posts</Link>
				<br/>
				<Link to={'/user0'}>users0</Link>
				<Switch>
					<Route path={'/user'} render={() => (<Users/>)}/>
					<Route path={'/user0'} render={() => (<Users1/>)}/>
					<Route path={'/posts'} render={() => (<Posts/>)}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
