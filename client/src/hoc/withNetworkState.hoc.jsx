import { Component } from 'react';

// Local Dependencies
import { networkError } from '../generic/networkError/networkError.view';

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
                        isFetching={ isFetching }
                        networkStatus={ networkStatus }
                        { ...restProps }
                    />
                )
            }else if( networkStatus === 'failure' ) {
                return(
                    <ErrorView
                        isFetching={ isFetching }
                        networkStatus={ networkStatus }
                        { ...restProps }
                    />
                )
            } else {
                return (
                    <SuccessView
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