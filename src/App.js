import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import ProfilePhoto from './components/ProfilePhoto';
import RepoList from './components/RepoList';

export default function App({ username }) {
  const [myGitHubData, setMyGitHubData] = useState(null);

  const myMock = {"login":"mannuelf","id":210504,"node_id":"MDQ6VXNlcjIxMDUwNA==","avatar_url":"https://avatars.githubusercontent.com/u/210504?v=4","gravatar_id":"","url":"https://api.github.com/users/mannuelf","html_url":"https://github.com/mannuelf","followers_url":"https://api.github.com/users/mannuelf/followers","following_url":"https://api.github.com/users/mannuelf/following{/other_user}","gists_url":"https://api.github.com/users/mannuelf/gists{/gist_id}","starred_url":"https://api.github.com/users/mannuelf/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/mannuelf/subscriptions","organizations_url":"https://api.github.com/users/mannuelf/orgs","repos_url":"https://api.github.com/users/mannuelf/repos","events_url":"https://api.github.com/users/mannuelf/events{/privacy}","received_events_url":"https://api.github.com/users/mannuelf/received_events","type":"User","site_admin":false,"name":"Mannuel Ferreira","company":"Noroff","blog":"https://www.mannuelferreira.com","location":"Oslo","email":null,"hireable":true,"bio":"Hello world I'm a Software Engineer. Teaching Front-End Development at Noroff.no.","twitter_username":"manidf","public_repos":175,"public_gists":102,"followers":64,"following":281,"created_at":"2010-02-25T08:19:17Z","updated_at":"2021-02-22T18:01:31Z"}

useEffect(() => {
  fetch(`https://api.github.com/users/olavomtveit`)
  .then((response) => {
    const apiData = response.json();
    return apiData;
  })
  .then((apiData) => setMyGitHubData(apiData))
  .catch((error) => console.log(error));
}, [username]);

if (myGitHubData) {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto 
        avatarUrl={myGitHubData.avatar_url} 
        avatarAlt={myGitHubData.name} />
        <Heading name={myGitHubData.name} />
        <RepoList username={username} />
      </header>
    </div>
  );
}

return (
  <div className="App">
    <header className="App-header">NO DATA SORRY</header>
  </div>
)
  
}