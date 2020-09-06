import CMS from 'netlify-cms-app';

import ContentPagePreview from './preview-templates/ContentPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', ContentPagePreview);
