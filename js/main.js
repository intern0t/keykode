$(document).ready(function()
	{
	var cleanURLParameter=function(content,toEncode)
	{
		if(toEncode==true)
		{
			return content.replace('+','-').replace('/','_')
		}
		else
		{
			return content.replace('-','+').replace('_','/')
		}
	};
	var isValidURL=function(str)
	{
		var a=document.createElement('a');
		a.href=str;
		return(a.host&&a.host!=window.location.host)
	};
	var baseurl=window.location.href;
	var projectURL=window.location.origin+window.location.pathname;
	$("a.encodeURL").on('click',function(e)
		{
		e.preventDefault();
		var _0=$("#toEncode");
		if(_0.val().length>0&&isValidURL(_0.val()))
		{
			var cleanURLParam=cleanURLParameter(btoa(_0.val()),true);
			_0.val(baseurl+"#!"+cleanURLParam)
		}
		else
		{
			alert("Please make sure to provide a proper yet valid URL!")
		}
		return false
		}
	);
	var getURLParameters=function()
	{
		var url=window.location.href;
		if(url.indexOf('#!')>0)
		{
			var arguments=url.split('#!').pop();
			if(arguments.length>0)
			{
				$("form.encodeForm").toggle('display');
				var cleanEncodedURLParam=cleanURLParameter(arguments,false);
				var cleanDecodedURL=atob(cleanEncodedURLParam);
				$("a.decodedURL").text(cleanDecodedURL);
				$("a.decodedURL").attr('href',cleanDecodedURL)
			}
			else
			{
			}
		}
	};
	var printCredits=function()
	{
		console.log("Designed and Developed by Prashant Shrestha © 2017.");
		console.log("Stop by and say 'Hi!' @ https://prashant.me/");
		console.log("Please use it at your own risk, this is simply a prototype of an idea and I (Prashant Shrestha) cannot be held liable for any deeds/misdeeds done via. this project.");
		console.log("Special thanks to ClipboardJS, SkeletonCSS, Github Pages & IcoMoon!");
	};
	getURLParameters();
	$("a.baseURL").attr('href',projectURL);
	new Clipboard('.copytoClipboard');
	printCredits()
	}
);
