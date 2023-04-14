// Required for the serializers prop in the PortableText component and they don't have a better option in their docs
// https://www.sanity.io/plugins/react-portable-text

export type ISanityBlockContent = ISanityBlock[];

export interface ISanityBlock {
  _type: 'block';
  _key: string;
  children: {
    _type: 'span';
    _key: string;
    marks: string[];
    text: string;
  }[];
  markDefs: any[];
  style: 'normal';
}
