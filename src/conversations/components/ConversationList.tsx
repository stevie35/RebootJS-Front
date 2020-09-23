import { List } from '@material-ui/core';
import React from 'react';
// import { getConversations } from '../../api/methods';
// import { User } from '../../users/types';
import { IConversation } from '../types';
import ConversationListItem from './ConversationListItem';
import { IAppState } from '../../appReducer';
import { connect } from 'react-redux';

interface ConversationListProps {
  conversations: IConversation[];
}

class ConversationList extends React.Component<ConversationListProps>{
  render(){
    return (
      <List>
        {this.props.conversations.map((conversation, index) => <ConversationListItem conversation={conversation} key={index}/>)}
      </List>
    )
  }
}

const mapStateToProps = ({conversation} : IAppState) => ({
  conversations: conversation.list
})
export default connect(mapStateToProps)(ConversationList);