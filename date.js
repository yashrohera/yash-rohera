function date_correct()
{
	var m=0
	var a=document.getElementById('date').value;
	var sum=0;
	for(i=0;i<4;i++)
	{
		sum=sum+a[i]*Math.pow(10,3-i);
	}
	if(parseInt(sum)<=2020 && parseInt(sum)>=2010)
	{
		document.getElementById('message_5').innerHTML='Enter a valid birth date:>10yrs!!';
		m=1;
	}
	return m;
}