import { atom, selector } from 'recoil'

export const counterState = atom({
  key: 'counterState',
  default: 0
})

export const execCounterState = selector({
  key: 'execCounterState',
  get: ({ get }) => {
    const count = get(counterState)

    return count * 2
  },
  set: ({ set }, count) => set(counterState, count * 9)
})
