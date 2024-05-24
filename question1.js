var n = 5;
 var m = 6;

for ( i = 1; i <= n; i++)
     {
    for (j = 1; j <= m; j++)
         {
        if (i == 1 || i == n || j == 1 || j == m)
             {
                process.stdout.write('*');
        } 
        else
         {
            process.stdout.write(' ');
        }
    }
    console.log('\n');
}

