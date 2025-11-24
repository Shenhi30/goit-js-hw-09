const STORAGE_KEY = 'feedback-from-state'

let formData = {
    email: '',
    message: '',
}

const form = document.querySelector('.feedback-form')

const saveData = localStorage.getItem(STORAGE_KEY)

if (saveData) {
    formData = JSON.parse(saveData)

    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
}

form.addEventListener('input', e => {
    const { name, value } = e.target

    formData[name] = value.trim()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
})

form.addEventListener('submit', e => {
    e.preventDefault()
    if (!formData.email || !formData.message) {
        alert('Fill all fields')
        return
    }
    console.log(formData)
    localStorage.removeItem(STORAGE_KEY)
    formData = { email: '', message: '' }
    form.reset()
})