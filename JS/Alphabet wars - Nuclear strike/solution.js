tests = [
'abde[fgh]ijk',
'ab#de[fgh]ijk',
'ab#de[fgh]ij#k',
'##abde[fgh]ijk',
'##abde[fgh]ijk[mn]op',
'#ab#de[fgh]ijk[mn]op',
'#abde[fgh]i#jk[mn]op',
'[a]#[b]#[c]',
'[a]#b#[c][d]',
'[a][b][c]',
'##a[a]b[c]#',
]

function alphabetWar(battlefield) {
    const shelterRegex = /\[|\]/g
    const stikeOutsideShelters = !!~battlefield.indexOf('#')
    if(!stikeOutsideShelters) {
        return battlefield.replace(shelterRegex, '')
    }

    const shelters = /[a-z#]+|\[[a-z]+\]/gi
    return battlefield.match(shelters)
    .map(el => el.match(shelterRegex) ? el :el.replace(/[a-zA-Z]/g, '')) 
    .filter(findDeath)
    .join('')
    .replace(/#|\[|\]/g, '')
}

function findDeath(el, idx, arr) {
  return !((getBombCount(arr[idx-1]) + getBombCount(arr[idx+1])) > 1)
}
function getBombCount(str) {
    if(typeof str === 'undefined') {
       return 0
    }
    let strikes = str.match(/#/gi)
    return strikes ? strikes.length : 0
}
