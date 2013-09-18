#!/usr/bin/perl -wT
use strict;
use HTML::Entities;
use URI::Escape; 
use CGI;
my $q = new CGI;
my $markupcontent = $q->param("article");
$markupcontent = "nothing submitted" if !$markupcontent;
$markupcontent = HTML::Entities::decode($markupcontent);
$markupcontent = URI::Escape::uri_unescape($markupcontent);
print "Content-type: text/html\n\n";
print $markupcontent . "\n";
exit;
