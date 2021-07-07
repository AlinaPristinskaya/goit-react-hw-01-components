import React from 'react'
import FriendsItem from './friendItem'
import PropTypes from 'prop-types'

const FriendsList=({friends})=>{
    
        return <ul>{
        friends.map((friend)=>(
        <li key={friend.id} class="item">
            <FriendsItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}/>
            </li>))}
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


