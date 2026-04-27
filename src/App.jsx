import { useState, useCallback } from 'react'

// A Side
import HeroCard from './components/a-side/HeroCard'
import WorkCard from './components/a-side/WorkCard'
import WhatIDoCard from './components/a-side/WhatIDoCard'
import ProjectsCard from './components/a-side/ProjectsCard'
import StackCard from './components/a-side/StackCard'
import DisponibleCard from './components/a-side/DisponibleCard'

// B Side
import PersonalCard from './components/b-side/PersonalCard'
import PassionsCard from './components/b-side/PassionsCard'
import GalleryCard from './components/b-side/GalleryCard'
import CosasQueAmoCard from './components/b-side/CosasQueAmoCard'

// Shell
import FlipCard from './components/FlipCard'
import SideToggleButton from './components/SideToggleButton'
import Footer from './components/Footer'

const CARD_COUNT = 4

export default function App() {
  const [isBSide, setIsBSide] = useState(false)
  const [flippedCards, setFlippedCards] = useState(Array(CARD_COUNT).fill(false))

  const toggleAll = useCallback(() => {
    const next = !isBSide
    setIsBSide(next)
    setFlippedCards(Array(CARD_COUNT).fill(next))
  }, [isBSide])

  const toggleCard = useCallback((index) => {
    setFlippedCards((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bg transition-colors duration-700">

      {/* Main content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 pt-10 pb-28">

        {/* ── A SIDE: bento grid ── */}
        {!isBSide && (
          <div className="flex flex-col gap-4">

            {/* Row 1: Hero (wide) + Work (narrow) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Hero spans 2 of 3 columns */}
              <div className="sm:col-span-2">
                <HeroCard />
              </div>
              {/* Work spans 1 of 3 columns */}
              <div className="sm:col-span-1">
                <WorkCard />
              </div>
            </div>

            {/* Row 2: What I Do — full width */}
            <WhatIDoCard />

            {/* Row 3: Projects — full width (4-column inner grid) */}
            <ProjectsCard />

            {/* Row 4: Stack — full width */}
            <StackCard />

            {/* Row 5: Disponible para — full width */}
            <DisponibleCard />

          </div>
        )}

        {/* ── B SIDE: 4 flippable bento cards ── */}
        {isBSide && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Card 0: Personal */}
            <FlipCard
              flipped={flippedCards[0]}
              onClick={() => toggleCard(0)}
              className="min-h-[220px]"
              front={
                <div
                  className="h-full rounded-2xl p-6 flex flex-col gap-3"
                  style={{ backgroundColor: '#1e3220', border: '1.5px solid #2e4a31' }}
                >
                  <h2 className="font-hand text-4xl font-bold" style={{ color: '#e8f2e8' }}>
                    Rodrigo Torres
                  </h2>
                  <p className="font-hand text-xl" style={{ color: '#8aab8c' }}>
                    Profe · Dev · Ser humano
                  </p>
                  <p className="font-hand text-sm mt-auto flex items-center gap-1.5" style={{ color: '#e8894e' }}>
                    <span style={{ display: 'inline-block', animation: 'bounce 1.4s infinite' }} aria-hidden="true">👆</span>
                    Toca para saber m&aacute;s
                  </p>
                </div>
              }
              back={<PersonalCard />}
            />

            {/* Card 1: Passions */}
            <FlipCard
              flipped={flippedCards[1]}
              onClick={() => toggleCard(1)}
              className="min-h-[220px]"
              front={
                <div
                  className="h-full rounded-2xl p-6 flex flex-col gap-3 items-center justify-center"
                  style={{ backgroundColor: '#1e3220', border: '1.5px dashed #5ec46a50' }}
                >
                  <span className="font-hand text-6xl font-bold animate-float" style={{ color: '#e8894e' }}>?</span>
                  <p className="font-hand text-xl text-center" style={{ color: '#8aab8c' }}>
                    Mis pasiones escondidas
                  </p>
                </div>
              }
              back={<PassionsCard />}
            />

            {/* Card 2: Gallery */}
            <FlipCard
              flipped={flippedCards[2]}
              onClick={() => toggleCard(2)}
              className="min-h-[260px]"
              front={
                <div
                  className="h-full rounded-2xl p-6 flex flex-col gap-4"
                  style={{ backgroundColor: '#1e3220', border: '1.5px solid #2e4a31' }}
                >
                  <h3 className="font-hand text-3xl font-bold" style={{ color: '#e8f2e8' }}>
                    Arte &amp; Momentos
                  </h3>
                  <div className="grid grid-cols-3 gap-2 mt-auto">
                    {['#5ec46a', '#e8894e', '#2e4a31'].map((c) => (
                      <div
                        key={c}
                        className="aspect-square rounded-lg"
                        style={{ backgroundColor: `${c}25`, border: `1.5px solid ${c}50` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              }
              back={<GalleryCard />}
            />

            {/* Card 3: Cosas que amo */}
            <FlipCard
              flipped={flippedCards[3]}
              onClick={() => toggleCard(3)}
              className="min-h-[260px]"
              front={
                <div
                  className="h-full rounded-2xl p-6 flex flex-col gap-3 justify-center items-center"
                  style={{ backgroundColor: '#1e3220', border: '1.5px dashed #5ec46a50' }}
                >
                  <h3 className="font-hand text-3xl font-bold text-center" style={{ color: '#e8f2e8' }}>
                    Cosas que amo
                  </h3>
                  <p className="font-hand text-base text-center" style={{ color: '#e8894e' }}>
                    Toca y te cuento
                  </p>
                </div>
              }
              back={<CosasQueAmoCard />}
            />

          </div>
        )}

        {/* Hint */}
        {!isBSide && (
          <p className="text-center text-xs mt-8 font-sans tracking-wide font-semibold" style={{ color: '#8aab8c' }}>
            Gir&aacute; la tarjeta para conocer al humano detr&aacute;s del dev →
          </p>
        )}
      </main>

      <Footer isBSide={isBSide} />
      <SideToggleButton isBSide={isBSide} onToggle={toggleAll} />
    </div>
  )
}
