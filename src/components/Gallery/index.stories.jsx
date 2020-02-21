import React from 'react';
import Gallery from './index';
import mock from './_mock';

export default { title: 'Gallery Component' };

export const galleryComponent = () => <Gallery {...mock.props} />;
