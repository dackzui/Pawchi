export type PetKind = 'chicken' | 'dog' | 'cat'

export interface PetOption {
  id: PetKind
  label: string
  defaultName: string
  hatchCue: string
  babyLabel: string
  teenLabel: string
  adultLabel: string
  eggHint: string
}

export const PET_OPTIONS: PetOption[] = [
  {
    id: 'chicken',
    label: 'Chicken',
    defaultName: 'Chickie',
    hatchCue: 'Peep!',
    babyLabel: 'baby chick',
    teenLabel: 'growing chick',
    adultLabel: 'big chicken',
    eggHint: 'Tap the egg!',
  },
  {
    id: 'dog',
    label: 'Dog',
    defaultName: 'Buddy',
    hatchCue: 'Woof!',
    babyLabel: 'puppy',
    teenLabel: 'growing dog',
    adultLabel: 'big dog',
    eggHint: 'Tap the egg!',
  },
  {
    id: 'cat',
    label: 'Cat',
    defaultName: 'Mochi',
    hatchCue: 'Meow!',
    babyLabel: 'kitten',
    teenLabel: 'growing cat',
    adultLabel: 'big cat',
    eggHint: 'Tap the egg!',
  },
]

export function getPetOption(kind: PetKind): PetOption {
  return PET_OPTIONS.find((p) => p.id === kind) ?? PET_OPTIONS[0]
}

export function isPetKind(value: unknown): value is PetKind {
  return value === 'chicken' || value === 'dog' || value === 'cat'
}
