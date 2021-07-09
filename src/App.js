import React from 'react';
import Profile from './components/profile/Profile'
import user from './components/profile/user.json'
import SocialData from './components/social-data/Social-data'
import socialDataJson from './components/social-data/social-data.json'
import FriendsList from './components/friends/friendsList'
import friendJson from './components/friends/friends.json'
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import transJson from './components/transactionHistory/transactionHistory.json'



function App() {
  return (
    <div>
      <h1>Это мое приложение на реакте</h1>
      <Profile 
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
     <SocialData  title="Upload stats" stats={socialDataJson}/>
     <FriendsList friends={friendJson} /> 
     <TransactionHistory items={transJson} /> 
    </div>
  );
}

export default App;
