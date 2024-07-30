import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  fetchSimpleIcons,
  renderSimpleIcon,
  SimpleIcon,
} from 'react-icon-cloud'
import OrbitingCircles from '@/components/ui/magicui/orbiting-circles'
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
      'javascript',
      'react',
      'android',
      'slack',
      'make',
      'next',
      'express',
      'nextdotjs',
      'prisma',
      'amazonaws',
      'vercel',
      'airtable',
      'github',
      'figma',
      'tailwindcss',
      ''
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
      <div className="absolute p-36 border border-muted-foreground/10 rounded-full" />
      <div className="absolute p-24 border border-muted-foreground/40 rounded-full" />
      <span className="pointer-events-none border border-muted-foreground/80 p-6 rounded-full">
        <IconLogo />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[50px] border-none p-3 bg-[#141412] bg-3d-gradient"
        duration={30}
        delay={10}
        radius={80}
      >
        <Icon slug="typescript" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none p-2 bg-[#141412] bg-3d-gradient"
        duration={30}
        delay={20}
        radius={80}
      >
        <Icon slug="react" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none p-2 bg-[#141412] bg-3d-gradient"
        radius={30}
        duration={20}
        delay={30}
      >
        <Icon slug="airtable" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none p-2 bg-[#141412] bg-3d-gradient"
        radius={190}
        duration={20}
        reverse
      >
        <Icon slug="github" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none p-2 bg-[#141412] bg-3d-gradient"
        radius={170}
        duration={18}
        delay={20}
        reverse
      >
        <Icon slug="make" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none p-2 bg-[#141412] bg-3d-gradient"
        radius={210}
        duration={30}
        delay={40}
        reverse
      >
        <Icon slug="figma" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none p-2 bg-[#141412] bg-3d-gradient"
        radius={70}
        duration={15}
        delay={23}
        reverse
      >
        <Icon slug="vercel" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none p-2 bg-[#141412] bg-3d-gradient"
        radius={70}
        duration={15}
        delay={25}
        reverse
      >
        <Icon slug="tailwindcss" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none p-2 bg-[#141412] bg-3d-gradient"
        radius={70}
        duration={15}
        delay={25}
        reverse
      >
        <Icon slug="amazonaws" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none p-2 bg-[#141412] bg-3d-gradient"
        radius={70}
        duration={15}
        delay={25}
        reverse
      >
        <Icon slug="javascript" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none p-2 bg-[#141412] bg-3d-gradient"
        radius={70}
        duration={15}
        delay={25}
        reverse
      >
        <Icon slug="slack" />
      </OrbitingCircles>
    </div>
  )
}
