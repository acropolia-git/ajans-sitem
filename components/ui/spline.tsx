'use client'

import dynamic from 'next/dynamic'

// En kritik nokta burası: Next.js'e "Bu bileşeni sunucuda derlemeye çalışma, sadece kullanıcı siteye girince tarayıcıda yükle" diyoruz (ssr: false).
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="w-8 h-8 border-4 border-neutral-600 border-t-white rounded-full animate-spin"></span>
    </div>
  )
})

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Spline
      scene={scene}
      className={className}
    />
  )
}