import { SpinnerRoundOutlined } from 'spinners-react';

const Loader = () => {
  return (
    <SpinnerRoundOutlined
      size={50}
      thickness={100}
      speed={100}
      color="rgba(252, 132, 45, 1)"
    />
  );
};

export default Loader;
