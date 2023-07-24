type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim()
  }

  return animal.fly()
}

const f: Fish = {
  swim: () => {
    console.log('i can swim')
  },
}

const b: Bird = {
  fly: () => {
    console.log('i can fly')
  },
}
move(f)
move(b)
export {}
