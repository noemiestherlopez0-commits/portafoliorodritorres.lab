import { useState, useCallback } from 'react'

// A Side
import HeroCard from './components/a-side/HeroCard'
import WorkCard from './components/a-side/WorkCard'
import WhatIDoCard from './components/a-side/WhatIDoCard'
import ProjectsCard from './components/a-side/ProjectsCard'
import StackCard from './components/a-side/StackCard'

// B Side
import PersonalCard from './components/b-side/PersonalCard'
import PassionsCard from './components/b-side/PassionsCard'
import GalleryCard from './components/b-side/GalleryCard'
import CosasQueAmoCard from './components/b-side/CosasQueAmoCard'

// Shell
import FlipCard from './components/FlipCard'
import SideToggleButton from './components/SideToggleButton'
import Footer from './components/Footer'

// Individual card flip states: 4 bento cards
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
    <div
      className="min-h-screen flex flex-col transition-colors duration-700"
      style={{ backgroundColor: isBSide ? '#fdf9f1' : '#0c120c' }}
    >
      {/* Side label */}
      <div className="flex justify-center pt-8 pb-2">
        <span
          className="text-xs uppercase tracking-[0.3em] font-sans transition-colors duration-500"
          style={{ color: isBSide ? '#4a6b3a' : '#4a6b3a' }}
        >
          {isBSide ? 'B SIDE' : 'A SIDE'}
        </span>
      </div>

      {/* Main content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pb-32 pt-4">

        {/* --- NON-FLIPPABLE: always shows A-Side wide cards --- */}
        {!isBSide && (
          <div className="flex flex-col gap-4">
            {/* Top row: Hero + Work */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <HeroCard />
              <WorkCard />
            </div>

            {/* What I do: full width */}
            <WhatIDoCard />

            {/* Projects + Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ProjectsCard />
              <StackCard />
            </div>
          </div>
        )}

        {/* --- B SIDE bento grid: 4 individually-flippable cards --- */}
        {isBSide && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 0: Personal / Hero revisit */}
            <FlipCard
              flipped={flippedCards[0]}
              onClick={() => toggleCard(0)}
              className="min-h-[220px]"
              front={
                <div
                  className="h-full rounded-2xl p-6 flex flex-col gap-3"
                  style={{ backgroundColor: '#fff8ee', border: '2.5px solid #7da866' }}
                >
                  <h2 className="font-hand text-4xl font-bold" style={{ color: '#0c120c' }}>
                    Rodrigo Torres
                  </h2>
                  <p className="font-hand text-xl" style={{ color: '#4a6b3a' }}>
                    Profe · Dev · Ser humano
                  </p>
                  <p className="font-hand text-base mt-auto" style={{ color: '#e08246' }}>
                    Toca para saber mas...
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
                  style={{ backgroundColor: '#fff5e6', border: '2.5px dashed #e08246' }}
                >
                  <span className="font-hand text-6xl font-bold" style={{ color: '#e08246' }}>
                    ?
                  </span>
                  <p className="font-hand text-xl text-center" style={{ color: '#4a6b3a' }}>
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
                  className="h-full rounded-2xl p-6 flex flex-col gap-3"
                  style={{ backgroundColor: '#fdf5e6', border: '2.5px solid #4a6b3a' }}
                >
                  <h3 className="font-hand text-3xl font-bold" style={{ color: '#0c120c' }}>
                    Arte & Momentos
                  </h3>
                  <div className="grid grid-cols-3 gap-2 mt-auto">
                    {['#7da866', '#e08246', '#4a6b3a'].map((c) => (
                      <div
                        key={c}
                        className="aspect-square rounded-lg"
                        style={{ backgroundColor: `${c}30`, border: `2px solid ${c}50` }}
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
                  style={{ backgroundColor: '#fffbf0', border: '2.5px dashed #7da866' }}
                >
                  <h3 className="font-hand text-3xl font-bold text-center" style={{ color: '#0c120c' }}>
                    Cosas que amo
                  </h3>
                  <p className="font-hand text-base text-center" style={{ color: '#e08246' }}>
                    Toca y te cuento
                  </p>
                </div>
              }
              back={<CosasQueAmoCard />}
            />

          </div>
        )}

        {/* Transition hint when on A Side */}
        {!isBSide && (
          <p className="text-center text-xs text-white/20 mt-8 font-sans tracking-wide">
            Presiona B SIDE para conocer el otro lado
          </p>
        )}
      </main>

      <Footer isBSide={isBSide} />
      <SideToggleButton isBSide={isBSide} onToggle={toggleAll} />
    </div>
  )
}
