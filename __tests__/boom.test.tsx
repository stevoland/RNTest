import {create} from 'react-test-renderer';
import {Switch} from 'react-native';

// Remove this line to pass
import '../nothing';

jest.mock('../nothing', () => {
  // ...Or remove this line to pass
  const {Image} = require('react-native');
});

beforeEach(() => {
  // ...Or remove this line to pass
  jest.resetAllMocks();
});

it('doesnt blow up', () => {
  create(<Switch />);
});
