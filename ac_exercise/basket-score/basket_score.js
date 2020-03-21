let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const icon = `
    <i class="fa fa-plus-circle up"></i>
    <i class="fa fa-minus-circle down"></i>
`

const dataPanel = document.querySelector('#data-panel')

// write your code here

function displayPlayerList(players) {
  let html = ""

  players.forEach(player => {
    html += `
<tr>
  <td>${player.name}</td>
  <td>
    <span>${player.pts}</span>
    ${icon}
  </td>
  <td>
    <span>${player.reb}</span>
    ${icon}
  </td>
  <td>
    <span>${player.ast}</span>
    ${icon}
  </td>
  <td>
    <span>${player.stl}</span>
    ${icon}
  </td>
  <td>
    <span>${player.blk}</span>
    ${icon}
  </td>
</tr>
`
  })
  dataPanel.innerHTML = html
}

displayPlayerList(players)

const plusBtn = document.querySelector('.fa-plus-circle')
dataPanel.addEventListener('click', function (event) {
  console.log(event)
  if (event.target.matches('.fa-plus-circle') || event.target.matches('.fa-minus-circle')) {
    const scoreBox = event.target.parentElement.children[0] //找爸爸 td 的第一個兒子 span
    let score = Number(scoreBox.innerText)
    if (event.target.matches('.fa-plus-circle')) {
      score += 1

    } else {
      score -= 1
      if (score < 0) score = 0

    }
    console.log(score)
    scoreBox.innerText = score
  }
})