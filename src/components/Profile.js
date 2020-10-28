import React from 'react';

import { ReactComponent as Leaf } from '../assets/leaf.svg';
import { ReactComponent as Settings } from '../assets/settings.svg';
import { ReactComponent as Boy } from '../assets/boy.svg';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Users } from '../assets/users.svg';
import { ReactComponent as Grid } from '../assets/grid.svg';

const Profile = props => {
    return (
        <div className='profile'>

            <div className="profile__navbar">
                <div className="profile__navbar-logo">LOGO</div>
            </div>

            <div className="profile__sidebar">
                <div className="profile__sidebar-nav">
                    <div className="profile__sidebar-icon">
                        <Grid className='profile__sidebar-svg' />
                    </div>
                    <div className="profile__sidebar-icon">
                        <Leaf className='profile__sidebar-svg' />
                    </div>
                    <div className="profile__sidebar-icon">
                        <Users className='profile__sidebar-svg' />
                    </div>
                    <div className="profile__sidebar-icon">
                        <User className='profile__sidebar-svg' />
                    </div>
                </div>
                <div className="profile__sidebar-settings">
                    <div className="profile__sidebar-icon">
                        <Settings className='profile__sidebar-svg' />
                    </div>
                </div>
            </div>

            <div className="profile__main">

                <div className="profile__left">
                    <div className="profile__left-imgBox">
                        <img className="profile__left-img" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="User Pic" />
                    </div>
                    <div className="profile__left-username">
                        elena@rock12
                    </div>
                    <div className="profile__left-fullname">
                        Elena Queens
                    </div>
                    <div className="profile__left-about">
                        About
                    </div>
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
                    <div className="profile__left-edit">
                        <div className="profile__left-edit--icon">
                            <Settings className='profile__left-edit--svg' />
                        </div>
                        <button className="profile__left-edit--btn">Edit Profile</button>
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

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Profile;
