console.log("REGEXP BAGIAN 1\n==============================================");

function panggilRegExp(value) {
  let str =
    "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

  let c = /[c]/gi;
  console.log(str.match(c));

  let k = /[k]/gi;
  console.log(str.match(k));

  let l = /[l]/gi;
  console.log(str.match(l));
}

panggilRegExp();
