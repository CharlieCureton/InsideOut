import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function SideNav(props) {
    var Tabs = ['blog', 'chat', 'people'];
    function switchTab(e) {
        $('.nav-tab').removeClass('tab-selected');
        $('#' + e.target.id).addClass('tab-selected');
        var El = e.target.id;
        $('.home-subpage').fadeOut();
        setTimeout(function () {
            $('.home-subpage').addClass('hidden');
            $('#' + El + '-page').fadeIn();
            $('#' + El + '-page').removeClass('hidden');
        }, 300);
    }
    return (
        <div className="chat-menu">
            <div id="blog" onClick={switchTab} className="nav-tab tab-selected">Blog</div>
            <div id="chat" onClick={switchTab} className="nav-tab">Chat</div>
            <div id="people" onClick={switchTab} className="nav-tab">People</div>
        </div>
    );
}

export default SideNav;