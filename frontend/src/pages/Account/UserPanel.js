import React from 'react';
import {AnimatedSwitch, AnimatedRoute} from '../../components/Anims/AnimatedRouter';
import OrderHistory from './OrdersHistory';
import './UserPanel.css';

const UserPanel=()=>{
    return(
        <div className="user-panel">
            <AnimatedSwitch animationClassName="page-switch" animationTimeout={300} className="page">
                <AnimatedRoute exact path="/account/order-history" render={(props)=>
                    <OrderHistory />
                }/>
            </AnimatedSwitch>
        </div>
    )
}

export default UserPanel;