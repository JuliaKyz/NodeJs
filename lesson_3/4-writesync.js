import fs from 'fs'

const data = '127.0.0.1 - - [22/Nov/2022:11:10:15 -0300] "GET /sitemap.xml HTTP/1.1" 200 0 "-" "curl/7.47.0"'

fs.writeFileSync('./access.log','\n', {flag: 'a'})
fs.writeFileSync('./access.log', data, {flag: 'a'})