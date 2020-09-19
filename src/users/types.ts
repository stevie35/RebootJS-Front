export interface User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    conversationSeen: {[conversationId: string] : string};
  }