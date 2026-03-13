#!/usr/bin/perl

$filename=$ARGV[0];
$flag="no";
$flag2="no";

open(IN,"$filename");
while($text=<IN>)	{
	chop($text);

	if($text=~/(.*)(#.*)/)	{
		$text=$1;
	}
	if($text=~/(.*)(#.*)/)  {
                $text=$1;
        }
	
	if($text=~/`/)	{
		$flag="yes";
		if($flag2 eq "no")	{
			print "<TABLE BORDER=0>\n";
			$flag2="yes";
		}
	}
	else	{
		$flag="no";
		if($flag2 eq "yes")	{
			print "</TABLE></p><hr>\n";
			$flag2="no";
		}
	}

	if($flag eq "yes")	{
		
		if ($text=~/Reference/) {($temp,$refbuffer,$temp2)=split /`/, $text;}
		
		if($text=~/Email/)      {
		($temp,$email,$temp2)=split /`/, $text;
		$text="<TR><TD><FONT SIZE=2 FACE=verdanaCOMMAhelv><b>$text</b></TD></TR>";

		$text=~s/`/<\/TD><TD><FONT SIZE=2 FACE=Arial><a href="mailto:$email?subject=Job Vacancy Ref:$refbuffer">/g;

		}


		$text="<TR><TD><FONT SIZE=2 FACE=verdanaCOMMAhelv><b>$text</b></TD></TR>";

		$text=~s/`/<\/TD><TD><FONT SIZE=2 FACE=arial>/g;
	}
		
	else	{
		$text="<P>$text</P>";
	}

#$text=~s/On/<B>On<\/B>/g;
#$text=~s/Yes/<B>Yes<\/B>/g;

if($text=~/PERMANENT VACANCIES/) {
	$text="<META HTTP-EQUIV=Refresh CONTENT=1800><title>Pelican.QTR Permanent Vacancies</title><FONT SIZE=4 FACE=arial color=#280d9b><B><i>$text</B></i></FONT>"
}
        
if($text=~/CONTRACT VACANCIES/)      {
	$text="<META HTTP-EQUIV=Refresh CONTENT=1800><title>Pelican.QTR Contract Vacancies</title><FONT SIZE=4 COLOR=#700808 FACE=arial><i><B>$text</B></i></FONT>"
}

$text=~s/COMMA/,/g;

	#print "$flag\n";
	print "$text\n";
}
close(IN);

if($flag2 eq "yes")     {
	print "</TABLE>\n";
}
