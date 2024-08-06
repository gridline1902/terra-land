import React from 'react'
import clsx from 'clsx'

// Define the props type with optional properties
type ContainerProps = {
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

// Create the Container component with the defined props type
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}