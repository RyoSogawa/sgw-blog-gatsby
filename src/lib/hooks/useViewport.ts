import { useEffect } from 'react'

/**
 * 画面サイズがMINIMUM_DISPLAY_WIDTHを切ったときにviewportを変更する
 * cf. https://zenn.dev/tak_dcxi/articles/690caf6e9c4e26#360px-%E6%9C%AA%E6%BA%80%E3%81%AF-js-%E3%81%A7-viewport-%E3%82%92%E5%9B%BA%E5%AE%9A%E3%81%99%E3%82%8B
 */
const MINIMUM_DISPLAY_WIDTH = 375

const switchViewport = () => {
  const viewport = document.querySelector('meta[name="viewport"]')
  if (!viewport) return

  const value =
    window.outerWidth > MINIMUM_DISPLAY_WIDTH
      ? 'width=device-width,initial-scale=1'
      : 'width=' + MINIMUM_DISPLAY_WIDTH

  if (viewport.getAttribute('content') !== value) {
    viewport.setAttribute('content', value)
  }
}

export const useViewport = () => {
  useEffect(() => {
    switchViewport()
    addEventListener('resize', switchViewport, false)

    return () => {
      removeEventListener('resize', switchViewport, false)
    }
  }, [])
}
