import React from 'react'

import Header from './main/template/header'
import Sidebar from './main/template/sidebar'
import Footer from './main/template/footer'
import Messages from './main/msg/messages'

export default props => (
    <div className={'wrapper'}>
        <Header/>
        <Sidebar/>
        <div className={'content-wrapper'}>
            {props.children}
        </div>
        <Footer/>
        <Messages/>
    </div>
)
