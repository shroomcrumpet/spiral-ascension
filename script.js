
arr = [];
let x = 1;

function spiral(n) {

    for (i = 0; i < n; i++) {

        arr[i] = [];

        for (i2 = 0; i2 < n; i2++) {

            arr[i][i2] = [];
        }
    }

    for (j = 0; j < Math.ceil( n / 2 ); j++) {

        for (k = j; k < n - j; k++) {

            arr[j][k].push(x);
            x++;
        };

        for (m = j + 1; m < n - j; m++) {

            arr[m][n - 1 - j].push(x);
            x++;
        };

        for (p = n - 1 - j - 1; p >= j; p--) {

            arr[n - 1 - j][p].push(x);
            x++;
        }

        for (z = n - 1 - j - 1; z > j; z--) {
            arr[z][j].push(x);
            x++;
        }
    }
    return console.log(arr);
}

spiral(process.argv[2]);






