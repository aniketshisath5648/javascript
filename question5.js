console.log('question 5th');
for(i=1;i<6;i++)
    {
        for(j=i;j<6;j++)
            {
                process.stdout.write(String(j+' '));
            }
            for(k=1;k<i;k++)
                {
                    process.stdout.write(String(k+' '));
                }
            console.log('\n');
    }