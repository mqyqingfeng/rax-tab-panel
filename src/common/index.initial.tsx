import { createElement } from 'rax';
import { Props } from '../types';
import styles from './style';

const RaxTabPanel = (props: Props) => {
  const { style, ...rest } = props;
  let styleProps = {
    ...styles.initial,
    ...style
  };
  return (
    <div {...rest} style={ styleProps }>
      Hello World
    </div>
  );
};

export default RaxTabPanel;
