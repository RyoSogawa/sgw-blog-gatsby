import React from 'react'
import useDarkMode from 'use-dark-mode'
import clsx from 'clsx'
import IconMoon from '../svg/IconMoon'
import IconSunny from '../svg/IconSunny'

export type BtnColorSchemeProps = {
  className?: string
}

const commonIconClass =
  'absolute w-6 h-6 top-1/2 left-1/2 transition-transform duration-300 ease-in-out'
const activeIconClass = '-translate-y-1/2 -translate-x-1/2'

const BtnColorScheme = ({ className }: BtnColorSchemeProps): JSX.Element => {
  const darkMode = useDarkMode(true, {
    classNameDark: 'dark',
    classNameLight: 'light',
  })

  return (
    <div className="grid place-items-center">
      <button
        type={'button'}
        className={clsx('overflow-hidden relative w-6 h-6', className)}
        aria-label={'toggle dark mode'}
        title={darkMode.value ? 'disable dark mode' : 'enable dark mode'}
        onClick={darkMode.toggle}
      >
        <IconMoon
          className={clsx(
            commonIconClass,
            darkMode.value
              ? activeIconClass
              : 'translate-y-full translate-x-[200%]'
          )}
        />
        <IconSunny
          className={clsx(
            commonIconClass,
            !darkMode.value
              ? activeIconClass
              : 'translate-y-full translate-x-[-200%]'
          )}
        />
      </button>
    </div>
  )
}

export default BtnColorScheme
