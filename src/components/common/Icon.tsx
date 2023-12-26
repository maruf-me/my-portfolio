'use client'
import React from 'react'
import { Icon as Iconify, IconifyIcon } from '@iconify/react'

type IIconProps = {
  color?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  icon: string | IconifyIcon;
  rotate?: number | undefined;
}

const Icon = ({ height, width, color, icon, rotate, className = "" }: IIconProps) => {
  return <Iconify icon={icon} width={width} height={height} color={color} rotate={rotate} className={className} />
}

export default Icon