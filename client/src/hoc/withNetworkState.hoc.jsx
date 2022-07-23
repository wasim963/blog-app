import { Component } from 'react';

// Local Dependencies
import { networkError } from '../generic/networkError/networkError.view';
import { NETWORK_STATUS } from '../constants/common';


const withNetworkState = ( PreloaderView, SuccessView, ErrorView = networkError ) => {

    class WithNetworkState extends Component {
        constructor(props) {
          super(props)
        
          this.state = {}
        }

        render() {

            // extract props
            const { isFetching, networkStatus, ...restProps } = this.props;

            if( isFetching ) {
                return(
                    <PreloaderView
                        { ...restProps }
                    />
                )
            } else if( networkStatus === NETWORK_STATUS.SUCCESS ) {
                return (
                    <SuccessView
                        isFetching={ isFetching }
                        networkStatus={ networkStatus }
                        { ...restProps }
                    />
                    )
            } else {
                return(
                    <ErrorView
                        isFetching={ isFetching }
                        networkStatus={ networkStatus }
                        { ...restProps }
                    />
                )
            }
        }
    }

    // set display name
    WithNetworkState.displayName = 'WithNetworkState';

    // set default props
    WithNetworkState.defaultProps = {
        isFetching: false,
        networkStatus: 200
    }

    // return class
    return WithNetworkState;
}

export default withNetworkState;