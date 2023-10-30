export const toTimeString = (time: number) => {
  if (time < 60) {
    return `00:${addZeroToTime(time)}`
  }

  const hours = Math.floor(time / 3600)
  const mins = Math.floor((time - hours * 3600) / 60)
  const seconds = Math.floor(time - hours * 3600 - mins * 60)

  if (!hours) {
    return `${addZeroToTime(mins)}:${addZeroToTime(seconds)}`
  }

  return `${hours}${addZeroToTime(mins)}:${addZeroToTime(seconds)}`
}

export const addZeroToTime = (num: number) => {
  return (num < 10 ? '0' : '') + num
}
