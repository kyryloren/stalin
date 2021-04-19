import { css } from 'styled-components';

import MoniqaMediumHeadingWOFF from '@fonts/Moniqa-MediumHeading.woff';
import MoniqaMediumHeadingWOFF2 from '@fonts/Moniqa-MediumHeading.woff2';
import MoniqaMediumParagraphWOFF from '@fonts/Moniqa-MediumParagraph.woff';
import MoniqaMediumParagraphWOFF2 from '@fonts/Moniqa-MediumParagraph.woff2';

const moniqaRegularWeights = {
  400: [MoniqaMediumParagraphWOFF, MoniqaMediumParagraphWOFF2],
  500: [MoniqaMediumHeadingWOFF, MoniqaMediumHeadingWOFF2],
};

const moniqa = {
  name: 'Moniqa',
  normal: moniqaRegularWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const moniqaRegular = createFontFaces(moniqa);

const Fonts = css`
  ${moniqaRegular}
`;

export default Fonts;
