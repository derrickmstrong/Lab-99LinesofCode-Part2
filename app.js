const btn = document.createElement('button');
btn.textContent = 'Sing!';
document.body.appendChild(btn);

btn.addEventListener('click', sing);

function sing() {
  let friends = ['Sydni', 'Hafeeza', 'Jason', 'Josh', 'Ana'];

  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];

    const div = document.createElement('div');
    div.className = 'friend';
    const h3 = document.createElement('h3');
    h3.textContent = friend;
    div.appendChild(h3);
    document.body.appendChild(div);

    function linesOfCodeSong(
      count = 99,
      refrain = 'line',
      refrain2 = 'code',
      prechorus = 'strikes one out, clears it all out',
      chorus = 'code in the file'
    ) {
      for (let j = count; j > 0; j--) {
        const para = document.createElement('p')
        
        if (count === 2) {
          para.textContent += 
            `${count} ${refrain}s of ${chorus}, ${count} ${refrain}s of ${refrain2}; ${friend} ${prechorus}, ${
              count - 1
            } ${refrain} of ${chorus}`
          ;
          count--;
        } else if (count === 1) {
          para.textContent +=
            `${count} ${refrain} of ${chorus}, ${count} ${refrain} of ${refrain2}; ${friend} ${prechorus}, no more ${refrain}s of ${chorus}`
          ;
        } else {
          para.textContent +=
            `${count} ${refrain}s of ${chorus}, ${count} ${refrain}s of ${refrain2}; ${friend} ${prechorus}, ${
              count - 1
            } ${refrain}s of ${chorus}`
          ;
          count--;
        }
        div.appendChild(para)
        document.body.appendChild(div)
      }
    }

    linesOfCodeSong();
  }
}
