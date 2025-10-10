/**
 * Help the general decode secret enemy messages.           
 * General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy but they are all encrypted. Those messages are crucial to getting the jump on the enemy and winning the war. Luckily intelligence also captured an encoding device as well. However even the smartest programmers weren't able to crack it though. So the general is asking you , his most odd but brilliant programmer.
 * @param {string} s - the secret message to decode
 * @returns {string} the decoded message
 */
device.decode = function (s) {
    const table = {
    a: 'H', b: 'a', c: 'I', d: 'b', e: 'J', f: 'c',
    g: 'K', h: 'd', i: 'L', j: 'e', k: 'M', l: 'f',
    m: 'N', n: 'g', o: 'O', p: 'h', q: 'P', r: 'i',
    s: 'Q', t: 'j', u: 'R', v: 'k', w: 'S', x: 'l',
    y: 'T', z: 'm', A: 'U', B: 'n', C: 'V', D: 'o',
    E: 'W', F: 'p', G: 'X', H: 'q', I: 'Y', J: 'r',
    K: 'Z', L: 's', M: '0', N: 't', O: '1', P: 'u',
    Q: '2', R: 'v', S: '3', T: 'w', U: '4', V: 'x',
    W: '5', X: 'y', Y: '6', Z: 'z', 0: '7', 1: 'A',
    2: '8', 3: 'B', 4: '9', 5: 'C', 6: '.', 7: 'D',
    8: ',', 9: 'E', ' ': 'G', '.': '?', ',': 'F', '?': ' '
  };
  const cnt = Object.keys(table).length;
  let out = '';

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (!Object.prototype.hasOwnProperty.call(table, ch)) {
      out += ch;
      continue;
    }
    let c = ch;
    const times = (i % cnt) + 1;
    for (let j = 0; j < times; j++) {
      c = table[c];
    }
    out += c;
  }

  return out;
};