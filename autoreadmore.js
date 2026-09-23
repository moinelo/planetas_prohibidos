/******************************************
Auto-readmore link script, version 2.0 (for blogspot)

(C)2008 by Anhvo

visit http://en.vietwebguide.com to get more cool hacks 
********************************************/
function removeHtmlTag(strx,chop){ 
	if(strx.indexOf("<")!=-1)
	{
		var s = strx.split("<"); 
		for(var i=0;i<s.length;i++){ 
			if(s[i].indexOf(">")!=-1){ 
				s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
			} 
		} 
		strx =  s.join(""); 
	}
	chop = (chop < strx.length-1) ? chop : strx.length-2; 
	while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
	strx = strx.substring(0,chop-1); 
	return strx+'...'; 
}

function createSummaryAndThumb(pID){
	var div = document.getElementById(pID);
	var imgtag = "";
	var img = div.getElementsByTagName("img");
	var summ = summary_noimg;
	if(img.length>=1) {	
		imgtag = '<span id="thumb" ><img src="'+img[0].src+'" loading="lazy" height:"'+img_thumb_height+'px"  /></span>';
		summ = summary_img;
	}
	
	var summary = imgtag + '<div style="margin-left: 80px; height: 110px;">' + removeHtmlTag(div.innerHTML,summ) + '</div>';
	div.innerHTML = summary;
}

function createSummaryAndThumb_long(pID){
	var div = document.getElementById(pID);
	var imgtag = "";
	var img = div.getElementsByTagName("img");
	var summ = summary_noimg_long;
	if(img.length>=1) {	
		imgtag = '<span style="float:left; padding:5px 8px 5px 8px;"><img class="thumb" src="'+img[0].src+'" max-height:"'+img_thumb_height_big+'px" width="'+img_thumb_width_big+'px" /></span>';
		summ = summary_img_long;
	}
	
	var summary = imgtag + '<div style="margin-left: 200px;">' + removeHtmlTag(div.innerHTML,summ) + '</div>';
	div.innerHTML = summary;
}
