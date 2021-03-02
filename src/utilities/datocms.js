import TextBlock from '../components/text-block';
import ImageGroup from '../components/image-group';
import ImageGrid from '../components/image-grid';
import ImageSingle from '../components/image-single';
import Heading from '../components/content-heading';
import TextBanner from '../components/text-banner';
import Banner from '../components/banner';
import VideoBlock from '../components/video-block';
import SocialLinks from '../components/social-links';
import TextContent from '../components/text-content';
import includes from 'lodash/includes';

import pull from 'lodash/pull';

const formatParagraph = paragraph => {
  if (includes(paragraph, '*')) {
    let splitParagraph = pull(paragraph.split('*'), '');
    let markup = '';
    splitParagraph.forEach((item, i) => {
      markup += i === 0 ? item : `<li>${item}</li>`;
    });
    return markup;
  } else {
    return paragraph;
  }
};

export const getComponent = el => {
  let El = null;
  let elProps = {};
  const typename = el.__typename;

  switch (typename) {
  case 'DatoCmsBanner':
    El = Banner;
    const { imagePortrait, imageLandscape } = el;
    elProps = {
      imagePortrait: imagePortrait,
      imageLandscape: imageLandscape,
    };
    break;
  case 'DatoCmsTextBanner':
    El = TextBanner;
    const { text, linkUrl, linkText } = el;
    elProps = {
      text: text,
      linkUrl: linkUrl,
      linkText: linkText,
    };
    break;
  case 'DatoCmsTextBlock':
    El = TextBlock;
    elProps = {
      heading: el.heading,
      paragraph: formatParagraph(el.paragraph),
    };
    break;
  case 'DatoCmsImageGroup':
    El = ImageGroup;
    const { firstImage, secondImage } = el;
    elProps = {
      id: el.id,
      images: [firstImage, secondImage],
    };
    break;
  case 'DatoCmsImageGrid':
    El = ImageGrid;
    const { images } = el;
    elProps = {
      id: el.id,
      images: images,
    };
    break;
  case 'DatoCmsSingleImage':
    El = ImageSingle;
    const { image, alignment } = el;
    elProps = {
      id: el.id,
      image: image,
      alignment: alignment,
    };
    break;
  case 'DatoCmsHeading':
    El = Heading;
    const { heading } = el;
    elProps = {
      id: el.id,
      heading: heading,
    };
    break;
  case 'DatoCmsVideoBlock':
    El = VideoBlock;
    const { video } = el;
    elProps = { video };
    break;
  case 'DatoCmsSocialLink':
    El = SocialLinks;

    elProps = { el };
    break;
  case 'DatoCmsTextContent':
    El = TextContent;
    elProps = { el };
    break;
  default:
    break;
  }

  return { El, elProps };
};
