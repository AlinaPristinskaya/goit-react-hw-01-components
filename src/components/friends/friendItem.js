import React from "react";
import PropTypes from 'prop-types'
import s from './friendsItem.module.css'


const FriendsItem=({avatar,name,isOnline})=>{
  
  return  <div>
  <span className={s.span} >{isOnline}</span>
  
   
    <img className={s.img} src={avatar} alt="name" width="48" />
    <p className={s.name}>{name}</p>
</div>}
    
    

    
    
 

FriendsItem.propTypes={
    
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}
export default FriendsItem;