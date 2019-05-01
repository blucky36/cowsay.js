const cmd = require('yargs').argv

const cowsay = (phrase) => {
  let top='',bottom='',spaces=""
  phrase = phrase._.join(' ')
  for(let i = 0; i < phrase.length; i++){
    top+='-'
    bottom+='#'
    spaces+=' '
  }
  console.log(`+-${top}-+\n| ${phrase} |\n+-${top}-+`)//phrase bubble
  console.log(`${spaces}   \\   ^__^\n${spaces}    \\  (oo)\\_______`)//cow to
  console.log(`${spaces}       (__)\\       )\\/\\\n${spaces}           ||----w |\n${spaces}           ||     ||`)//cow body
  console.log(`##${bottom}##########################`)
}

cowsay(cmd)
