import React from 'react'
import PropTypes from 'prop-types'
import style from './profile.module.css'






const Profile=({avatar, name, tag, location,stats})=>(
  <div className={style.card}>
  <div >
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={style.avatar}
    />
    <p className={style.br}>{name}</p>
    <p className={style.center}>{tag}</p>
    <p className={style.center}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.li}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{stats.followers}</span>
    </li>
    <li className={style.li}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{stats.views}</span>
    </li>
    <li className={style.li}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>

)

 Profile.propTypes ={
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers:PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
 }
 
  
 


export default Profile