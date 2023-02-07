import fsp from 'fs/promises'

fsp.readFile('./access.log', 'utf-8')
    .then(console.log, console.error)
    .catch(console.error)