import React from 'react'
import FriendsItem from './friendItem'
import PropTypes from 'prop-types'
import s from './friends.module.css'
const FriendsList=({friends})=>{
    console.log(friends);
    
        return <ul className={s.stats}>{
        friends.map((friend)=>{ 
            
                return   <li key={friend.id} className={friend.isOnline?s.green:s.red}>
            
            <FriendsItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}/>
            </li>})}
    </ul>

     
   }
FriendsList.propTypes={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.node.isRequired,
        })
    ).isRequired
}
export default FriendsList;


