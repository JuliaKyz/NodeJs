import fsp from 'fs/promises'

const data = '\n127.0.0.1 - - [22/Nov/2022:11:10:15 -0300] "GET /sitemap.xml HTTP/1.1" 200 0 "-" "curl/7.47.0"'


fsp.writeFile('./access.log1', data, {flag: 'a'})
    .then(() => console.log('success'))
    .catch(console.error)