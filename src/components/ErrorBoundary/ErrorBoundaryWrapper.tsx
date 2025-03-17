import {Component, ReactNode} from 'react';

import Error from './Error';

export interface ErrorBoundaryProps {
  children?: ReactNode;
  hasError?: boolean;
}

interface State {
  hasError?: boolean;
}

class ErrorBoundaryWrapper extends Component<ErrorBoundaryProps, State> {
  static defaultProps = {
    hasError: false,
  };

  public state: State = {
    hasError: this.props.hasError,
  };

  componentDidCatch(error: any, info: any) {
    console.log(error, info);
    this.setState({hasError: true});
  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;

    return hasError ? <Error /> : children;
  }
}

export default ErrorBoundaryWrapper;
