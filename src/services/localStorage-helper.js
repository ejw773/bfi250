const localStorageHelper = async (key, value) => {
    try {
        const dataStore = JSON.parse(localStorage.getItem('user'))
        dataStore[key] = value
        localStorage.setItem("user", JSON.stringify(dataStore))
    } catch (e) {
        console.log(e)
    }
}

export default localStorageHelper