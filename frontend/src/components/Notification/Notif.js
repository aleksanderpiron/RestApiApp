import React, {Component} from 'react';
import NotifItem from './NotifItem';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

class Notif extends Component{
    state={
        notifs:[],
    }
    create=(type, text, lifeTime)=>{
        const newNotifs = this.state.notifs;
        const id = Math.floor(parseInt(Date.now()) * Math.random()).toString();
        if(lifeTime){
            setTimeout(()=>{this.close(id)}, lifeTime);
        }
        newNotifs.push({
            id,
            type,
            text
        })
        this.setState({
            notifs:newNotifs
        })
    }
    close=(targetId)=>{
        const newNotifs = this.state.notifs.filter(notif=>{
            return notif.id !== targetId
        });
        this.setState({
            notifs:newNotifs
        })
    }
    render(){
        const notifs = this.state.notifs.map(notif=>{
            return <NotifItem key={notif.id} id={notif.id} close={this.close} type={notif.type} text={notif.text}/>
        })
        return(
            <>
                <ReactCSSTransitionGroup className="notif-box" transitionEnterTimeout={400}   transitionLeaveTimeout={400} transitionName="notif">
                    {notifs}
                </ReactCSSTransitionGroup>
            </>
        )
    }
}

export default Notif;