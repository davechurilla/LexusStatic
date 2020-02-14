import React from 'react';
import PerformanceHero from './index';
import mock from './_mock';

export default { title: 'Performance Hero' };

export const performanceHero = () => <PerformanceHero {...mock.props} />;
