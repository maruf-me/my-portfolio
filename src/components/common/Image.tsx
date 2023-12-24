import React, { CSSProperties } from 'react';
import NextImage, { ImageProps } from 'next/image';

type IProps = ImageProps & {className?: string; style?: CSSProperties}

const Image = (props: IProps) => <NextImage {...props} priority={true} />;

export default Image;