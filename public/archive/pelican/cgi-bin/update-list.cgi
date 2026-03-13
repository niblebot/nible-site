#!/usr/bin/sh

echo "content-type: text/html"
echo ""
echo "<BODY BGCOLOR=#FFFFFF TEXT=#111100>"
echo "<FONT SIZE=1 FACE=verdana,helv>"

echo "<P><B>Please wait ...<B></P>"

echo "<PRE>"

./makehtml.cgi "permanent.data" > "/webspace/vx979988/public_html/pelican-qtr/permanent.html"

./makehtml.cgi "contract.data" > "/webspace/vx979988/public_html/pelican-qtr/contract.html"

echo "</PRE>"
echo "<P>Done.</P>"

echo "<A HREF=../vacancies.html target=_top>Click here when finished.</A>"
