import { Noto_Sans_KR } from 'next/font/google'

const black = Noto_Sans_KR({
  weight: '800',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-bold',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

const extraBold = Noto_Sans_KR({
  weight: '800',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-bold',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

const bold = Noto_Sans_KR({
  weight: '700',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-bold',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

const semiBold = Noto_Sans_KR({
  weight: '600',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-medium',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

const medium = Noto_Sans_KR({
  weight: '600',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-medium',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

const regular = Noto_Sans_KR({
  weight: '400',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-bold',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

const light = Noto_Sans_KR({
  weight: '300',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-medium',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

const extraLight = Noto_Sans_KR({
  weight: '200',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-bold',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

const thin = Noto_Sans_KR({
  weight: '100',
  display: 'fallback',
  style: 'normal',
  variable: '--noto-sans_KR-medium',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

export {
  thin as notoSansKrThin,
  extraLight as notoSansKrExtraLight,
  light as notoSansKrLight,
  regular as notoSansKrRegular,
  medium as notoSansKrMedium,
  semiBold as notoSansKrSemiBold,
  bold as notoSansKrBold,
  extraBold as notoSansKrExtraBold,
  black as notoSansKrBlack,
}
