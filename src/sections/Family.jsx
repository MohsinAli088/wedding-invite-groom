import Card from '../components/Card'
import { Divider } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import { family } from '../data/content'

export default function Family() {
  return (
    <Card id="family" label="Family" cornerMantra="॥ શ્રી ગણેશાય નમઃ ॥">
      {/* 1. Divine Blessings */}
      <Reveal delay={100} className="mt-1">
        <h2 className="text-base font-bold tracking-[0.2em] text-crimson uppercase sm:text-xl lg:text-2xl">
          {family.divineTitle}
        </h2>
        <Divider className="mt-1.5 text-rust/80" />
      </Reveal>

      <ul className="mt-2.5 w-full max-w-2xl space-y-1">
        {family.divineCouples.map(([him, her], i) => (
          <Reveal as="li" key={him} delay={180 + i * 40} className="grid grid-cols-2 gap-x-2 sm:gap-x-6 text-[11px] sm:text-sm lg:text-[15px]">
            <span className="text-right font-medium text-teal-deep">{him}</span>
            <span className="text-left font-medium text-teal-deep">{her}</span>
          </Reveal>
        ))}
      </ul>

      {/* 2. With Respectful Greetings */}
      <Reveal delay={380} className="mt-3.5">
        <h3 className="text-base font-bold tracking-[0.2em] text-crimson uppercase sm:text-xl lg:text-2xl">
          {family.greetingsTitle}
        </h3>
        <Divider className="mt-1.5 text-rust/80" />
      </Reveal>

      <ul className="mt-2.5 w-full max-w-2xl space-y-1">
        {family.greetingsCouples.map(([him, her], i) => (
          <Reveal as="li" key={him} delay={450 + i * 40} className="grid grid-cols-2 gap-x-2 sm:gap-x-6 text-[11px] sm:text-sm lg:text-[15px]">
            <span className="text-right font-medium text-teal-deep">{him}</span>
            <span className="text-left font-medium text-teal-deep">{her}</span>
          </Reveal>
        ))}
      </ul>

      {/* Special members */}
      <Reveal delay={750} className="mt-2.5 flex flex-wrap justify-center gap-x-4 gap-y-0.5 text-[11px] sm:text-sm lg:text-[15px] font-medium text-teal-deep">
        {family.specialMembers.map((name) => (
          <span key={name} className="whitespace-nowrap">{name}</span>
        ))}
      </Reveal>

      {/* Awaits message */}
      <Reveal delay={850} className="mt-3.5">
        <p className="text-xs font-semibold text-rust italic sm:text-base lg:text-lg">{family.awaits}</p>
      </Reveal>

      {/* Tahuko */}
      {family.tahuko?.lines?.length > 0 && (
        <Reveal delay={950} className="mt-3.5 max-w-xl">
          <h4 className="text-xs tracking-[0.25em] text-crimson uppercase sm:text-sm font-bold">{family.tahuko.title}</h4>
          <div className="mt-1.5 space-y-0.5 font-gujarati text-[11px] leading-relaxed text-teal-deep sm:text-sm font-medium">
            {family.tahuko.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
          {family.tahuko.from && (
            <div className="mt-1.5 flex flex-col items-center">
              <span className="h-px w-16 bg-rust/40" />
              <p className="mt-1 text-xs font-bold text-rust sm:text-sm">
                {family.tahuko.from}
              </p>
            </div>
          )}
        </Reveal>
      )}

      {/* No gifts blessings note */}
      {family.note && (
        <Reveal delay={1100} className="mt-3.5">
          <p className="border-y border-rust/40 px-4 py-1 text-[11px] tracking-[0.2em] text-crimson uppercase sm:text-xs font-semibold">{family.note}</p>
        </Reveal>
      )}
    </Card>
  )
}
