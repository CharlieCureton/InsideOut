import React from 'react';
import { Logo } from '../../components';
import { SideNav } from '../../components/';
import Blog from './Blog';
import Chat from './Chat';
import People from './People';
import '../../css/Home.css';

function Home(props) {
    return (
        <div className={"App App-center-x " + props.bgColor}>
            <div className="container">
                <div className="container-header">
                    <Logo size="small" />
                </div>
                <div className="inner-container">
                    <div className="room-wrapper">
                        <SideNav />
                        <Blog bgColor={props.bgColor} />
                        <Chat bgColor={props.bgColor} />
                        <People bgColor={props.bgbgColor} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;