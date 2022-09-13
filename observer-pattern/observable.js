let observers = []

export default Object.freeze({
    subcribe: func => observers.push(func),
    notify: data => observers.forEach(observer => observer(data))
})
