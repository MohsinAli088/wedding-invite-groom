import Card from '../components/Card'
import { Divider } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import { description } from '../data/content'

export default function Description() {
  return (
    <Card id="saptabandhan" label={description.title} cornerMantra="॥ શ્રી ગણેશાય નમઃ ॥">
      <h2 className="text-3xl font-semibold text-crimson uppercase sm:text-4xl lg:text-5xl">
        <SplitText chars={description.title} step={80} className="tracking-[0.2em]" />
      </h2>
      <Reveal delay={800}>
        <p className="mt-2 text-lg text-teal-deep italic sm:text-xl">{description.subtitle}</p>
        <Divider className="mt-4 text-rust" />
      </Reveal>
      <div className="mx-auto mt-4 max-w-2xl space-y-3">
        {description.paragraphs.map((p, i) => (
          <Reveal key={i} delay={1000 + i * 200}>
            <p className="text-sm leading-relaxed text-ink sm:text-base">{p}</p>
          </Reveal>
        ))}
      </div>
    </Card>
  )
}
