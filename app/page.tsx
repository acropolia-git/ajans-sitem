'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { MonitorPlay, Sparkles, LayoutTemplate, Share2, ShoppingCart, Film } from "lucide-react"

export default function AgencyLandingPage() {
  const services = [
    {
      title: "Yapay Zeka Video Stüdyosu",
      description: "Kling ve Veo3 gibi yeni nesil AI araçlarıyla fotogerçekçi 3D animasyonlar, CGI ürün reklamları ve sinematik tanıtım filmleri üretiyoruz.",
      icon: <Sparkles className="w-8 h-8 text-neutral-300" />
    },
    {
      title: "Modern Web Tasarım",
      description: "Responsive HTML5, gelişmiş CSS ve JavaScript ile yüksek performanslı, etkileşimli tek sayfa (SPA) arayüzleri geliştiriyoruz.",
      icon: <LayoutTemplate className="w-8 h-8 text-neutral-300" />
    },
    {
      title: "E-Ticaret & Katalog",
      description: "Kullanıcı dostu modal pencereler ve filtreleme özellikleriyle etkileşimli ürün katalogları ve sipariş yönetim sistemleri kurguluyoruz.",
      icon: <ShoppingCart className="w-8 h-8 text-neutral-300" />
    },
    {
      title: "Sosyal Medya Yönetimi",
      description: "Meta Graph API ve Instagram API entegrasyonlarıyla veri odaklı stratejiler oluşturuyor, marka bilinirliğinizi artırıyoruz.",
      icon: <Share2 className="w-8 h-8 text-neutral-300" />
    },
    {
      title: "Video & Animasyon",
      description: "Endüstriyel ürün demo videolarından kurumsal kimlik animasyonlarına kadar markanızı vizyoner bir şekilde yansıtıyoruz.",
      icon: <Film className="w-8 h-8 text-neutral-300" />
    },
    {
      title: "Dijital Prodüksiyon",
      description: "Etkileyici ambalaj mockup'ları ve 1:1 fuar alanı CGI tasarımları ile markanızı fiziksel ve dijital dünyada öne çıkarıyoruz.",
      icon: <MonitorPlay className="w-8 h-8 text-neutral-300" />
    }
  ]

  return (
    <main className="min-h-screen bg-black text-neutral-50 font-sans selection:bg-neutral-800">
      
      {/* HERO SECTION */}
      <section className="p-4 md:p-8 pt-12 md:pt-24 max-w-7xl mx-auto">
        <Card className="w-full h-[550px] bg-black/[0.96] border-neutral-800 relative overflow-hidden rounded-3xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            size={400}
          />
          
          <div className="flex flex-col-reverse md:flex-row h-full">
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 mb-6 border border-neutral-700 rounded-full text-xs font-medium tracking-wide text-neutral-300 w-fit">
                YENİ NESİL DİJİTAL AJANS
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 leading-tight">
                Geleceği <br/> Şekillendir.
              </h1>
              <p className="mt-6 text-neutral-400 max-w-lg text-lg leading-relaxed">
                Yapay zeka, CGI ve interaktif web teknolojilerini birleştirerek markanız için unutulmaz dijital deneyimler tasarlıyoruz.
              </p>
              <div className="mt-8">
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors">
                  Projelerimizi Keşfet
                </button>
              </div>
            </div>

            {/* Sağ İçerik - SAF HTML IFRAME ILE 3D ANIMASYON */}
            <div className="flex-1 relative min-h-[250px] md:min-h-full">
              <iframe 
                src="https://my.spline.design/kZDDjO5HuC9GJUM2/" 
                frameBorder="0" 
                width="100%" 
                height="100%" 
                className="w-full h-full object-cover"
                title="3D Agency Animation"
              ></iframe>
            </div>
          </div>
        </Card>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Görsel üretimden, kodlamaya kadar dijital varlığınızın her aşamasında en son teknolojileri kullanıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-neutral-900/50 border-neutral-800 hover:bg-neutral-900 transition-colors group relative overflow-hidden">
              <Spotlight size={250} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader>
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-neutral-100">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Fikirleri gerçeğe dönüştürüyoruz</h2>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              İster yüksek dönüşümlü tek sayfalık bir kampanya sitesi, ister endüstriyel ürünleriniz için fotogerçekçi CGI render'lar olsun; hedef kitlenizle bağ kuran vizyoner işler üretiyoruz.
            </p>
            <ul className="space-y-4 text-neutral-300">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Özel Fonksiyonel Web Arayüzleri
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Yapay Zeka Destekli Prodüksiyon
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Veri Odaklı Sosyal Medya
              </li>
            </ul>
          </div>
          <div className="flex-1 relative w-full h-[400px] rounded-2xl overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

    </main>
  )
}