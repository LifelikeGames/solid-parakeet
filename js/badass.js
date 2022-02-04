$(function ()
{
  getRandomAdjective()
})

function getRandomAdjective() {
  var adjectives = ['Badass','Mustard Boy','Rich Man Koen', 'Eik lover','Badass','Badass','Badass']
  var rand = Math.floor(Math.random() * adjectives.length)
  $('#badass').first().text(adjectives[rand]);
}
