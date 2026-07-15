import { useState, type FormEvent } from 'react'
import { APP_NAME, APP_VERSION, DEVELOPER } from './brand'
import { PET_OPTIONS, type PetKind } from './pets'

interface NameScreenProps {
  onStart: (name: string, kind: PetKind) => void
}

export function NameScreen({ onStart }: NameScreenProps) {
  const [name, setName] = useState('')
  const [kind, setKind] = useState<PetKind>('chicken')
  const selected = PET_OPTIONS.find((p) => p.id === kind) ?? PET_OPTIONS[0]

  function submit(e: FormEvent) {
    e.preventDefault()
    onStart(name.trim() || selected.defaultName, kind)
  }

  return (
    <section className="screen screen--name">
      <div className="brand-block">
        <p className="brand">{APP_NAME}</p>
        <p className="tagline">Your tiny pet friend</p>
      </div>

      <form className="name-form" onSubmit={submit}>
        <p className="name-form__label" id="pet-pick-label">
          Pick your pet
        </p>
        <div className="pet-picker" role="group" aria-labelledby="pet-pick-label">
          {PET_OPTIONS.map((pet) => (
            <button
              key={pet.id}
              type="button"
              className={`pet-pick pet-pick--${pet.id} ${kind === pet.id ? 'pet-pick--selected' : ''}`}
              onClick={() => {
                setKind(pet.id)
                if (!name || PET_OPTIONS.some((p) => p.defaultName === name)) {
                  setName(pet.defaultName)
                }
              }}
              aria-pressed={kind === pet.id}
            >
              <span className={`pet-pick__face pet-pick__face--${pet.id}`} aria-hidden />
              <span className="pet-pick__label">{pet.label}</span>
            </button>
          ))}
        </div>

        <label className="name-form__label" htmlFor="pet-name">
          Name your {selected.label.toLowerCase()}
        </label>
        <input
          id="pet-name"
          className="name-form__input"
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 12))}
          placeholder={selected.defaultName}
          autoComplete="off"
          autoCapitalize="words"
          enterKeyHint="done"
          maxLength={12}
        />
        <button type="submit" className="btn-primary">
          Start
        </button>
      </form>

      <footer className="developer">
        <p className="developer__by">
          Made by{' '}
          <a
            className="developer__link"
            href={DEVELOPER.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DEVELOPER.name}
          </a>
        </p>
        <a
          className="developer__site"
          href={DEVELOPER.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {DEVELOPER.siteLabel}
        </a>
        <p className="developer__version">v{APP_VERSION}</p>
        <p className="developer__install">
          iPhone: Safari → Share → Add to Home Screen
        </p>
      </footer>
    </section>
  )
}
