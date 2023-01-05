import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../components/homepage';
import store from '../redux/configureStore';

describe('homepage ', () => {
  it('check if it rendering or not', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
