// Required for the serializers prop in the PortableText component and they don't have a better option in their docs
// https://www.sanity.io/plugins/react-portable-text

import PortableText from 'react-portable-text';

import { ISanityBlockContent } from '@/lib/sanity';

interface ISanityText {
  content: ISanityBlockContent;
}

export function SanityText({ content }: ISanityText): JSX.Element {
  return (
    <PortableText
      // Pass in block content straight from Sanity.io
      content={content}
      serializers={{
        h1: (props: any) => <h1 className='text-5xl font-extrabold dark:text-white pb-4' {...props} />,
        h2: (props: any) => <h2 className='text-4xl font-bold dark:text-white pb-4' {...props} />,
        h3: (props: any) => <h3 className='text-3xl font-bold dark:text-white pb-2' {...props} />,
        h4: (props: any) => <h4 className='text-2xl font-bold dark:text-white pb-2' {...props} />,
        normal: (props: any) => <p className='mb-2' {...props} />,
        li: (props: any) => (
          <li
            className='list-disc ml-8 relative before:block before:absolute before:left-[-24px] before:text-gray-400 before:font-bold before:text-xs before:top-[5px]'
            {...props}
          />
        ),
        blockquote: (props: any) => (
          <blockquote className='p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800'>
            <p className='text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white' {...props} />
          </blockquote>
        ),
      }}
    />
  );
}
