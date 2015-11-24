/**
 * Created by inet2005 on 11/17/15.
 */
var sum = 0;
for(var i = 2; i < process.argv.length; i++)
    sum += Number( process.argv[i]);
console.log(sum);