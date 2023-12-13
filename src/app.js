function greet(name) {
    if (Array.isArray(name) && isLanguage(name[1])) {
        return multiLanguage(name[0], name[1])
    }
    if (isUndefinedOrNull(name)) return 'Hello, my friend.'
    if (isEmptyString(name)) return 'Hello, my friend.'
    if (typeof name !== 'string') return upperAndLowerCaseName(name)
    if (typeof name !== 'string') return multiLanguage(name)
    if (isUpperCase(name)) return 'HELLO, ' + name + '!'
    return 'Hello, ' + name + '.'
}

function isUndefinedOrNull(name) {
    return name === undefined || name === null
}

function isEmptyString(name) {
    return name === ''
}

function isUpperCase(name) {
    return name === name.toUpperCase()
}

function multiName(name) {
    if (name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}.`
    } else {
        return `Hello, ${name[0]}, ${name[1]} and ${name[2]}.`
    }
}

function upperAndLowerCaseName(name) {
    if (name.length > 2) {
        const upperName = []
        const lowerName = []

        name.forEach((n) => {
            if (isUpperCase(n)) {
                upperName.push(n)
            } else {
                lowerName.push(n)
            }
        })

        if (upperName.length === 0) {
            return multiName(name)
        } else {
            if (lowerName.length > 0 && upperName.length > 0) {
                return `Hello, ${lowerName
                    .slice(0, -1)
                    .join(', ')} and ${lowerName.slice(
                    -1
                )}. AND HELLO ${upperName.join(' ')}!`
            } else if (lowerName.length > 0) {
                return `Hello, ${lowerName.join(', ')}.`
            } else {
                return `Hello, ${upperName.join(' ')}!`
            }
        }
    } else if (name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}.`
    }
}

function isLanguage(name) {
    const validLanguages = ['fr', 'en', 'nl']
    return validLanguages.includes(name)
}

function multiLanguage(name, language) {
    if (!isLanguage(language)) {
        return `Language ${name} not supported.`
    }

    if (language === 'fr') {
        return `Bonjour, ${name}.`
    }
    if (language === 'en') {
        return `Hello, ${name}.`
    }
    if (language === 'nl') {
        return `Hallo, ${name}.`
    }
}

module.exports = greet
