import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from 'react-icon-cloud'
import OrbitingCircles from '@/components/magicui/orbiting-circles'
import { IconLogo } from './icons'
export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510'
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff'
  const minContrastRatio = theme === 'dark' ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>


export function OrbitingCirclesDemo() {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const slugs = [
      'typescript',
      'react',
      'android',
      'make',
      'next',
      'express',
      'nextdotjs',
      'prisma',
      'amazonaws',
      'postgresql',
      'firebase',
      'nginx',
      'vercel',
      'airtable',
      'github',
      'figma',
      'figma',
    ]
    fetchSimpleIcons({ slugs }).then(setData)
  }, [])

  const renderedIcons = useMemo(() => {
    if (!data) return {}

    const icons: { [slug: string]: JSX.Element } = {}
    for (const [slug, icon] of Object.entries(data.simpleIcons)) {
      icons[slug] = renderCustomIcon(icon, theme || 'light')
    }
    return icons
  }, [data, theme])

  const Icon = ({ slug }: { slug: string }) => {
    return renderedIcons ? renderedIcons[slug] : null
  }

  return (
    <div className="relative flex h-[500px] w-full max-w-xl flex-col items-center justify-center bg-radial-fade">
      <div className="absolute p-36 border border-muted-foreground/10 rounded-full"/>
      <div className="absolute p-24 border border-muted-foreground/40 rounded-full"/>
      <span className="pointer-events-none border border-muted-foreground/80 p-6 rounded-full">
        <IconLogo />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[60px] border-none p-3 bg-[#141412] bg-3d-gradient"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icon slug="typescript" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icon slug="react" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={15}
        reverse
      >
        <Icon slug="airtable" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icon slug="github" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={170}
        duration={18}
        delay={20}
        reverse
      >
        <Icon slug="make" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={210}
        duration={30}
        delay={40}
        reverse
      >
        <Icon slug="figma" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={70}
        duration={15}
        delay={23}
        reverse
      >
        <Icon slug="vercel" />
      </OrbitingCircles>
    </div>
  )
}

export function CalendlyIcon() {
  return <Icon slug="calendly" />;
}
