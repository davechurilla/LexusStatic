import React from 'react';
import SampleComponent from './index';
import mock from './_mock';

export default { title: 'Sample Component' };

export const defaultExample = () => <SampleComponent {...mock.props} />;
