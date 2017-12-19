import React, {Component} from "react";
import {graphql} from "react-apollo/index";
import gql from "graphql-tag";

class ChannelsList extends Component {
  render() {
    if (this.props.allChannelsQuery && this.props.allChannelsQuery.loading) {
      return <div>Loading</div>
    }

    // 2
    if (this.props.allChannelsQuery && this.props.allChannelsQuery.error) {
      return <div>Error</div>
    }

    // 3
    const channels = this.props.allChannelsQuery.allChannels;
    return (<ul>
      { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
    </ul>);

  }
}

const ALL_CHANNELS_QUERY = gql`
  query AllChannelsQuery {
    allChannels {
      id
      name
    }
  }
`;

export default graphql(ALL_CHANNELS_QUERY, { name: 'allChannelsQuery' })(ChannelsList);
