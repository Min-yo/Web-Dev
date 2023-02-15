let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll")
styles[Math.floor((styles.length - 1) / 2)] = "Clssics"
alert(styles.shift());
styles.unshift("Rap", "Reggae")