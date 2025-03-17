import {Component, ReactNode} from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?(value: string | number): void;
}

interface ButtonState {
  count: number;
  isLoading: boolean;
}

class Button extends Component<ButtonProps, ButtonState> {
  private somePrivateField: string = '';

  state = {
    count: 0,
    isLoading: true,
  };

  constructor(props: ButtonProps) {
    super(props);

    this.somePrivateField = '111';
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   const {onClick} = this.props;
  //
  //   console.log('Button:onClick');
  //   if (onClick) {
  //     onClick('click from component');
  //   }
  // }

  handleClick = () => {
    const {onClick} = this.props;
    const {count} = this.state;

    this.setState({count: count + 1}, () => {
      const {count} = this.state;

      if (onClick) {
        onClick(count);
      }
    });

    console.log('Button:onClick');
  };

  componentDidMount() {
    console.log('componentDidMount');

    this.setState({
      isLoading: false,
    });
  }

  componentDidUpdate(prevProps: ButtonProps) {
    console.log('componentDidUpdate', prevProps);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // get content() {
  //   const {children, className, ...props} = this.props;
  //
  //   return (
  //     <div {...props} className={clsx(styles.overlayContent, className)}>
  //       {children}
  //     </div>
  //   );
  // }

  render() {
    console.log('render', this.somePrivateField);
    const {children} = this.props;
    const {count, isLoading} = this.state;

    if (isLoading) {
      return <div>loader</div>;
    }

    return (
      <button className={styles.root} onClick={this.handleClick}>
        {children}: {count}
      </button>
    );
  }
}

export default Button;
