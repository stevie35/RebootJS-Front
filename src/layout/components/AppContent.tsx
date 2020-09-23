import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChatUI from '../../conversations/components/ChatUI';
// import ContactList from '../users/components/ContactList';
import LoginScreen from '../../login/components/LoginScreen';
import MyProfile from '../../profile/components/MyProfile';
// import { User } from '../../users/types';
import { HomeScreen } from './HomeScreen';
import { IConversation } from '../../conversations/types';

interface AppContentProps {
  //connectedUser?: User;
  conversations: IConversation[]
}

class AppContent extends React.Component<AppContentProps> {
  render(){
    return (
      <Switch>
        <Route path='/conversation/:conversationId' component={() => <ChatUI conversations={this.props.conversations}/> } />
        <Route path='/profile' component={MyProfile} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    )
  }
}

export default AppContent;