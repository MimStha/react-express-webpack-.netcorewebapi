import _ from 'lodash'

const str = 'abcdefghijklmnopqrstuvwxyz'
console.log(`String to reverse ${str}.`)
let reversedStr = _reverse(str)._join('')
console.log(`Reversed string ${reversedStr}.`)