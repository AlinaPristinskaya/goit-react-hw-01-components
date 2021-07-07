import React from "react";
import PropTypes from 'prop-types'



const FriendsItem=({avatar,name,isOnline})=>(
    <div>
  <span class="status">{isOnline}</span>
  
   
    <img class="avatar" src={avatar} alt="name" width="48" />
    <p class="name">{name}</p>
</div>)
    
    

    
    
 

FriendsItem.propTypes={
    
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}
export default FriendsItem;