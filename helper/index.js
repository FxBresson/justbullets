export const defaultValue = (type) => {
    switch(type) {
        case 'normal':
            return 0
        case 'bool':
            return false
        case 'mood': 
            return ''
        default:
            return null
    }
}