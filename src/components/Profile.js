import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { ReactComponent as Settings } from '../assets/settings.svg';
import { ReactComponent as Boy } from '../assets/boy.svg';
import BottomNav from './BottomNav';



const Profile = props => {

    const [isEditing,setIsEditing] = useState(false);
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const [profilePic,setProfilepic] = useState("");
    const [googleId,setGoogleId] = useState("");
    const [accountStatus, setAccountStatus] = useState(true);

    const getProfile = () => {
        var user_id = '12a34';
        axios({
            method: 'get',
            url: `http://localhost:5000/user/${user_id}/getProfile`,
        })
        .then((res) => {
            for (let index = 0; index < res.data.user.length; index++) {
                var data = res.data.user[index];
                setUsername(data.username);
                setPassword(data.password);
                setName(data.name);
                setProfilepic(data.profilePic);
                setAccountStatus(data.account_activation_status);
                setGoogleId(data.googleId);
            }
        })
    }

    useEffect(() => {

        getProfile();

    }, [])

    return (
        <div className='profile'>

            <div className="profile__navbar">
                <div className="profile__navbar-logo">LOGO</div>
            </div>
            <div className="profile__container">
            <div className="profile__main">

                <div className="profile__left">
                    <div className="profile__left-container">
                        <div className="profile__photo-container">
                            <div className="profile__left-imgBox-container">
                                <div className="profile__left-imgBox">
                                    <img className="profile__left-img" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="User Pic" />
                                </div>
                                <div className="profile__left-username">
                                    {username}
                                </div>
                            </div>
                            <div className="profile__left-fullname">
                                {name}
                            </div>
                            <div className="profile__left-about">
                                About
                            </div>
                        </div>
                        <div className="profile__stats-container">
                            <div className="profile__left-followers">
                                <div className="profile__left-followers--icon">
                                    <Boy className='profile__left-followers--svg' />
                                </div>
                                <button className="profile__left-followers--btn">Followers</button>
                            </div>
                            <div className="profile__left-following">
                                <div className="profile__left-following--icon">
                                    <Boy className='profile__left-following--svg' />
                                </div>
                                <button className="profile__left-following--btn">Following</button>
                            </div>
                            <button className="profile__left-follow">Follow Button</button>
                        </div>
                    </div>
                    <div className="profile__left-edit">
                        <Link to={{
                            pathname : '/editProfile',
                            state: {
                                username,
                                password,
                                googleId,
                                name,
                                profilePic
                            }
                        }}>
                        <div className="profile__left-edit--icon">
                            <Settings className='profile__left-edit--svg' />
                        </div>
                        <button className="profile__left-edit--btn">Edit Profile</button> </Link>
                    </div>
                </div>

                <div className="profile__right">
                    <div className="profile__right-nav">
                        <button className="profile__right-navBtn profile__right-navBtn--active">Posts</button>
                        <button className="profile__right-navBtn">Stats</button>
                    </div>
                    <div className="profile__right-main">

                        <div className="profile__right-card">
                            <div className="profile__right-imgBox">
                                <img className="profile__right-img" src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                            </div>
                            <div className="profile__right-desc">
                                <p className="profile__right-title">Hallelujah</p>
                                <div className="profile__right-icons">
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                </div>
                            </div>
                        </div>

                        <div className="profile__right-card">
                            <div className="profile__right-imgBox">
                                <img className="profile__right-img" src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                            </div>
                            <div className="profile__right-desc">
                                <p className="profile__right-title">Hallelujah</p>
                                <div className="profile__right-icons">
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                </div>
                            </div>
                        </div>

                        <div className="profile__right-card">
                            <div className="profile__right-imgBox">
                                <img className="profile__right-img" src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                            </div>
                            <div className="profile__right-desc">
                                <p className="profile__right-title">Hallelujah</p>
                                <div className="profile__right-icons">
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                </div>
                            </div>
                        </div>

                        <div className="profile__right-card">
                            <div className="profile__right-imgBox">
                                <img className="profile__right-img" src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                            </div>
                            <div className="profile__right-desc">
                                <p className="profile__right-title">Hallelujah</p>
                                <div className="profile__right-icons">
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                </div>
                            </div>
                        </div>

                        <div className="profile__right-card">
                            <div className="profile__right-imgBox">
                                <img className="profile__right-img" src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                            </div>
                            <div className="profile__right-desc">
                                <p className="profile__right-title">Hallelujah</p>
                                <div className="profile__right-icons">
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                </div>
                            </div>
                        </div>

                        <div className="profile__right-card">
                            <div className="profile__right-imgBox">
                                <img className="profile__right-img" src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                            </div>
                            <div className="profile__right-desc">
                                <p className="profile__right-title">Hallelujah</p>
                                <div className="profile__right-icons">
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                    <div className="profile__right-icon"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            </div>
            <BottomNav />
        </div>
    );
};

export default Profile;
