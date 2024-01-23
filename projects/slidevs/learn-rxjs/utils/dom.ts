export function toast(message: string, duration = 2000) {
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.textContent = message

  document.body.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, duration)
}
