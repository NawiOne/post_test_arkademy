const alphSort = () => {
  const alph = ["z", "d", "a", "b"];
  let end = false;

  while (!end) {
    end = true;
    for (let i = 1; i < alph.length; i++) {
      if (alph[i - 1] > alph[i]) {
        end = false;
        const tmp = alph[i - 1];
        alph[i - 1] = alph[i];
        alph[i] = tmp;
      }
    }
  }
  return alph;
};

console.log(alphSort());
