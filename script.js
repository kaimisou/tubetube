(function() {

var pos2=[];
var idx2= 0;
var idx = 0;
var total = '21';
var data = ' ';
var url  = window.location.href;
var vid;
var plist;
var clipboard =0;

var power = 1;

var like ;
var icon ;
var bar_hide;   
var single_line;

var scrollonoff = 0;

var confirm_text;

var nicoicon = 'https://www.nicovideo.jp/favicon.ico';

var nglist=[];
var ngwords=[];
var lang = chrome.i18n.getUILanguage();   // en-US , ja , zh-TW , zh-CN , pt- , es-, ru , ko

var lang_array=[];


if(lang.includes('en-')){
}else if(lang.includes('zh-')){
    lang_array = ['顏色','隨機','顯示','隱藏','透明','<加速','>減速','放大＋','縮小 -','重播','燈光','小窗','跑馬燈off','跑馬燈下','跑馬燈上','↕全視窗',
    '停止捲動','重新開始','複製到剪貼簿','字體','禁用字詞','追加','已加入','移除禁用字詞','將使用者加入除外清單？'];
}else if(lang.includes('ja')){
    lang_array = ['色','ランダム色','表示','隠す','透過','<加速','>減速','サイズ＋','サイズ -','リプレイ','ライト','ポップアップ','１行表示off','１行表示　下','１行表示　上','↕フルウィンドウ',
    'スクロール停止','再開','クリップボードにコピー','フォント','NGワード','追加','追加しました','移除禁用字詞','このユーザーを除外リストに追加する？'];
}else{
    lang_array = ['color','random','show','hide','opacity','< <','> >','size ＋','size - ','replay','light','popup','single-line off','single-line:bottom','single-line:top','↕ fullwindow',
    'stop scrolling','restart','copy to clipboard','Font','Add banned word','add','added.','- remove from filter -','Add user to search filter?'];
}



if(document.getElementsByTagName("BODY")[0].innerHTML.includes('MGS2')){}else{
$("head").append("<style type=\"text/css\">" + 
            
            "@font-face {\n" +
            "\tfont-family: 'JP_EN__SoukouMincho';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__SoukouMincho.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Wantedo';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Wantedo.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 
            "@font-face {\n" +
            "\tfont-family: 'EN__Saddlebag';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Saddlebag.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 



            "@font-face {\n" +
            "\tfont-family: 'EN__SEGA';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__SEGA.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__MLBANGEL';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__MLBANGEL.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__Senobi-Gothic-Regular';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__Senobi-Gothic-Regular.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__OtsutomeFont_Ver2';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__OtsutomeFont_Ver2.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__komorebi-gothic';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__komorebi-gothic.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__hkkoinkk';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__hkkoinkk.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__GN-KillGothic-U-KanaO';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__GN-KillGothic-U-KanaO.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__genkai-mincho';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__genkai-mincho.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 


            "@font-face {\n" +
            "\tfont-family: 'JP_EN__dejima-mincho-r227';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__dejima-mincho-r227.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__aoyagireisyosimo_ttf_2_01';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__aoyagireisyosimo_ttf_2_01.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__Aoyagikouzan';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__Aoyagikouzan.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_doseisan';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_doseisan.ttf")+"')format(\"truetype\");\n"+
            "}\n" +

            "@font-face {\n" +
            "\tfont-family: 'EN__RINGM';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__RINGM.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Resident_Evil_Large';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Resident_Evil_Large.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__PrinceValiant';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__PrinceValiant.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Play-Bold';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Play-Bold.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__OptimusPrincepsSemiBold';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__OptimusPrincepsSemiBold.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Onciale PhF01';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Onciale PhF01.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__OldeEnglish';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__OldeEnglish.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__MGS2';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__MGS2.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

   
            "@font-face {\n" +
            "\tfont-family: 'EN__METAGEAR_title';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__METAGEAR_title.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Lollipoptron';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Lollipoptron.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Incised Black Wide';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Incised Black Wide.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Final-Fantasy';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Final-Fantasy.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 



            "@font-face {\n" +
            "\tfont-family: 'EN__anirb';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__anirb.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN_PixelMplus10-Regular';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN_PixelMplus10-Regular.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN_PixelMplus12-Regular';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN_PixelMplus12-Regular.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 
            
            "@font-face {\n" +
            "\tfont-family: 'EN__Ancient Medium';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Ancient Medium.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__AGENG';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__AGENG.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__1456Gutenberg';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__1456Gutenberg.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 


            "@font-face {\n" +
            "\tfont-family: 'EN__lexo';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__lexo.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Font el font bubble';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Font el font bubble.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__beatstreet';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__beatstreet.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__VTKS_Autorized_2';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__VTKS_Autorized_2.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Norse';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Norse.otf")+"');\n"+
            "}\n" + 
            "@font-face {\n" +
            "\tfont-family: 'EN__Dovahkiin';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Dovahkiin.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Splatter Kings';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Splatter_Kings.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Freight Train Gangsta';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Freight Train Gangsta.ttf")+"')format(\"truetype\");\n"+
            "}\n" + 

            

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__Ronde-B_square';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__Ronde-B_square.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__mushin';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__mushin.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__memoir-square';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__memoir-square.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__memoir-round';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__memoir-round.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__memoir';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__memoir.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__Makinas-4-Square';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__Makinas-4-Square.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__kemono';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__kemono.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__ferrum';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__ferrum.otf")+"');\n"+
            "}\n" + 
            "@font-face {\n" +
            "\tfont-family: 'EN__BOOKmanOpti-Light';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__BOOKmanOpti-Light.otf")+"');\n"+
            "}\n" + 
            "@font-face {\n" +
            "\tfont-family: 'EN__BOOKmanOpti-Bold';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__BOOKmanOpti-Bold.otf")+"');\n"+
            "}\n" + 
            "@font-face {\n" +
            "\tfont-family: 'EN__Albertella-Light';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Albertella-Light.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__Wantedo';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Wantedo.otf")+"');\n"+
            "}\n" + 
            "@font-face {\n" +
            "\tfont-family: 'EN__Durango Western Eroded Demo';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Durango Western Eroded Demo.otf")+"');\n"+
            "}\n" + 
            "@font-face {\n" +
            "\tfont-family: 'EN__Cowboys20';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__Cowboys20.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'EN__DonGraffiti';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/EN__DonGraffiti.otf")+"');\n"+
            "}\n" + 

            "@font-face {\n" +
            "\tfont-family: 'JP_EN__genno_meicho';\n"+
            "\tsrc: url('"+chrome.extension.getURL("fonts/JP_EN__genno_meicho.otf")+"');\n"+
            "}\n" +

            "</style>");

$('<link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet">').appendTo('body');
$('<link href="https://fonts.googleapis.com/earlyaccess/kokoro.css" rel="stylesheet">').appendTo('body');

$('<link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet">').appendTo('body');

$('<link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet">').appendTo('body');


}



if(typeof font ==='undefined'){
        font = '';
}    



if(url.includes('youtube')){

chrome.storage.sync.get(['clipbutton'], function(result) {
      clipboard = result.clipbutton;          });

setTimeout(function(){ 
    if(typeof clipboard =='undefined'){clipboard=0;}
 },100);




chrome.storage.sync.get(['ng'], function(result) {
      nglist = result.ng;});

setTimeout(function(){ 
    if(typeof nglist =='undefined'){nglist=[];}
 },100);

chrome.storage.sync.get(['ngword'], function(result) {
      ngwords = result.ngword;});

setTimeout(function(){ 
    if(typeof ngwords =='undefined'){ngwords=[];}
 },100);


setTimeout(function(){

    var s_string = '';
    s_string += '<option>- remove from filter -</option>';
    for(var i=0; i<nglist.length; i++){
        
        s_string += ('<option value="'+i+'">'+nglist[i]+'</option>');

    }

    s_string = '<select id="selectlist" style="width:18px">'+ s_string+'</select>';     


if($('#search').html().includes('sfilter')){}else{
    $('#search-icon-legacy').clone().appendTo('#search-form');
    $('<paper-button id="resetf" style="background-color:#f7f7f7;color:#727272;border: thin solid #aaaaaa;">Reset</paper-button >').appendTo('#search-form');
    $(s_string).appendTo('#search-form');

    $('#selectlist').on('change',function(){
        if($( "#selectlist option:selected" ).text().includes('remove from')){}else{
        
        var index = nglist.indexOf($( "#selectlist option:selected" ).text());
        
        nglist.splice(index, 1);

        
        $( "#selectlist option:selected" ).hide();
        chrome.storage.sync.set({ng:nglist});
        }
    });

    $('#resetf').click(function(){         

        if(confirm('Clear search filter?')){
    

    
    chrome.storage.sync.set({ng:[]});

    chrome.storage.sync.get(['ng'], function(result) {
                  nglist = result.ng;});

    setTimeout(function(){
                var s_string = '';
                s_string += '<option>- remove from filter -</option>';
                for(var i=0; i<nglist.length; i++){
    
                    s_string += ('<option>'+nglist[i]+'</option>');
                }

                $('#selectlist').html(s_string);

                },300);

        }
    });     

    $('#search-icon-legacy >yt-icon').eq(1).click(function(){    
    if($('#search-input>#search').val().includes('-"')){}else{
    var keyword = $('#search-input>#search').val()+' -"'+nglist+'"';

    $('#search-input>#search').val(keyword.replace(/,/g,'" -"'));
    setTimeout(500);
    }   
});

}


$('#search-icon-legacy >yt-icon').eq(1).text('Search & Filter');
$('#search-icon-legacy >yt-icon').eq(1).attr('id','sfilter');


},200);

chrome.storage.sync.get(['ng'], function(result) {
      nglist = result.ng;});

}


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function addComment(color2='white',rand=0) {
    $('ytd-comments#comments').animate({scrollTop:$('ytd-comments#comments').scrollTop()+180}, 1);
    $('html, body').animate({scrollTop:$(document).scrollTop()+1}, 0);
    $('html, body').animate({scrollTop:$(document).scrollTop()-1}, 0);


    for(var i=0; i<ngwords.length; i++){
            if(ngwords[i].includes('--')){
                
                
                if(document.querySelectorAll("#content-text")[idx].innerText.length > parseInt(ngwords[i].replace('--',''))){
                    idx++;
                    
                    return;
                }

            }

            if(document.querySelectorAll("#content-text")[idx].innerHTML.includes(ngwords[i])){

                idx++;
                return;

                }
        }
    

    var len = document.querySelectorAll("#content-text").length;

    if(((idx+1)%len+1) == len ){  
               

          
        if(total>20){}
        else{
             clearInterval(myVar);
        }
        if(total<2){ clearInterval(myVar); }
        
        lem2 = len;
    

    }


    var likes=0;
    var icons='';
    

    
    likes = document.querySelectorAll("#vote-count-left")[idx].innerHTML.trim();    
    
    
    
    var likes_num = parseInt(likes);
    

    if(icon==1 && $('#sections').html().includes('author-thumbnail')){
        
        data = $(' #body >#author-thumbnail>a>yt-img-shadow[height*="40"]').eq(idx).html();
        
        
        
        if(!(data.includes('.jpg'))) {
            
            data = document.querySelectorAll("div#author-thumbnail")[idx].innerHTML;
            
            data = data.split('href="')[1];
            data = data.split('">')[0];
        url = 'https://www.youtube.com'+icons
        
        $.ajax({ url: url, success: function(data) { 
            
            
            data = data.split('<meta property="og:image" content')[1];
            
            data = data.split('">')[0];
            

            data = '<img id="iconimg" width="33" height= "33" style="border-radius: 50%; zoom:'+(size/34)+'; " src'+data +'">'; //<<<<<<<<<<<<<<<<<<
            window.data = data;
            
            
            
            
             } });     

        }       

        data = data.split('src="')[1].split('">')[0];
        
        
        data = '<img id="iconimg" width="33" height= "33" style="border-radius: 50%; zoom:'+(size/34)+'; " src="'+data +'">'; //<<<<<<<<<<<<<<<<<<
        
    } else{data='';}  


    icons = data;
    


    window.clipboard;
    

    var comment = document.querySelectorAll("#content-text")[idx].innerHTML;



    if(clipboard==1){
    if(comment.includes('あ')||comment.includes('か')||comment.includes('さ')||comment.includes('た')||
                comment.includes('い')||comment.includes('き')||comment.includes('し')||comment.includes('ち')||
                comment.includes('う')||comment.includes('く')||comment.includes('す')||comment.includes('つ')||
                comment.includes('え')||comment.includes('け')||comment.includes('せ')||comment.includes('て')||
                comment.includes('お')||comment.includes('こ')||comment.includes('そ')||comment.includes('と')||
                comment.includes('な')||comment.includes('は')||comment.includes('ま')||comment.includes('よ')||
                comment.includes('に')||comment.includes('ひ')||comment.includes('み')||comment.includes('ゆ')||
                comment.includes('ぬ')||comment.includes('ふ')||comment.includes('む')||comment.includes('や')||
                comment.includes('ね')||comment.includes('へ')||comment.includes('め')||
                comment.includes('の')||comment.includes('ほ')||comment.includes('も')||
                comment.includes('ら')||comment.includes('わ')||comment.includes('ア')||
                comment.includes('り')||comment.includes('を')||comment.includes('イ')||
                comment.includes('る')||comment.includes('ン')||comment.includes('ウ')||
                comment.includes('れ')||comment.includes('オ')||comment.includes('エ')||
                comment.includes('ろ')

                ){
                comment=comment.replace(/\n/g,'');
                if(comment.includes('</a>')){
                    navigator.clipboard.writeText(comment.split('</a>')[1].replace('&amp',''));

                    document.cookie('ycome='+comment.split('</a>')[1]);
                }else{
                    navigator.clipboard.writeText(comment.replace('&amp','')).then(function() {});
                }
                }
                }
    if(clipboard==2){
    if(comment.includes('a')||comment.includes('b')||comment.includes('c')||comment.includes('d')||
                comment.includes('e')||comment.includes('f')||comment.includes('g')||comment.includes('h')||
                comment.includes('i')||comment.includes('j')||comment.includes('k')||comment.includes('l')||
                comment.includes('m')||comment.includes('n')||comment.includes('o')||comment.includes('p')||
                comment.includes('q')||comment.includes('r')||comment.includes('s')||comment.includes('t')||
                comment.includes('u')||comment.includes('v')||comment.includes('w')||comment.includes('x')||
                comment.includes('y')||comment.includes('z')||comment.includes('A')||comment.includes('B')||
                comment.includes('C')||comment.includes('D')||comment.includes('E')||comment.includes('F')||
                comment.includes('G')||comment.includes('H')||comment.includes('I')||
                comment.includes('J')||comment.includes('K')||comment.includes('L')||
                comment.includes('M')||comment.includes('N')||comment.includes('O')||
                comment.includes('P')||comment.includes('Q')||comment.includes('R')||
                comment.includes('S')||comment.includes('T')||comment.includes('U')||
                comment.includes('V')||comment.includes('W')||comment.includes('X')||
                comment.includes('Y')

                ){
                if(comment.includes('</a>')){
                    navigator.clipboard.writeText(comment.split('</a>')[1].replace('&amp','')).then(function() {});
                }else{
                    navigator.clipboard.writeText(comment.replace('&amp','')).then(function() {});
                }
                }
                }


    //--------------------------------------------------------------------------------------------------
    if(like && likes_num ){
        var comment = document.querySelectorAll("#content-text")[idx].innerHTML+' 👍'+likes+'   💬'+idx;
       }
    else{
        if(typeof comment =='undefined'){
          $('html, body').animate({scrollTop:($(document).height())/9}, 0);
          $('html, body').animate({scrollTop:0}, 0);
          $('ytd-comments#comments').animate({scrollTop:$('ytd-comments#comments').scrollTop()+80}, 1);

        }
        var comment = document.querySelectorAll("#content-text")[idx].innerHTML;
       
    }

        
    total = $(".count-text.style-scope.ytd-comments-header-renderer").html();
    total = parseInt(total.replace(',','').replace('Comments',''));
     
    
    idx++;



    
    var commentPos = $('#movie_player').offset();

    
    
    if(rand==1){
    color2 = randomColor(14);      

    }
    


    if(idx==1){  // first commentPos            //#comments
        
        var data0 = $('#body >#author-thumbnail>a>yt-img-shadow[height*="40"]').eq(0).html();
        data0 = data0.split('src="')[1];
        data0 = data0.split('">')[0];

        if(icon==1){
            icons = '<img id="iconimg" width="33" height= "33" style="border-radius: 50%; zoom:'+(size/34)+'; " src="'+data0 +'"> '; //<<<<<<<<<<<<<<<<<<
        }
        

        var select = '<div id="item" style="font-size: '+size+'px;font-family:'+font+'; display:inline; color: #EBC944; font-weight: bold; text-shadow: black 1px 1px 1px; width: 100px; white-space: nowrap; position: absolute;z-index: 10;"><span id="icon" style="opacity:'+iconop+';">'+icons+'</span><span id = "come" style="opacity:'+ opacity +';">'+ comment +'</span></li>';
        

        var nico_comment = $(select).appendTo('#movie_player');
      
    }
    else{


        var select = '<div id="item" style="font-size: '+size+'px;font-family:'+font+'; color: '+
        color2+';  font-weight: bold; text-shadow: black 2px 2px 2px; width: 100px; white-space: nowrap; position: absolute;z-index: 10;"><span id="icon" style="opacity:'+iconop+';">' +
        icons+'</span> <span id = "come" style="opacity:'+ opacity +';">'+ comment + '</span></li>';
        var nico_comment = $(select).appendTo('#movie_player');
    }



    if(comment.includes(':0')||comment.includes(':1')||comment.includes(':2')||comment.includes(':3')||comment.includes(':4')||comment.includes(':5')||comment.includes(':6')||comment.includes(':7')||comment.includes(':8')||comment.includes(':9')){
         
      tcome.push(select);
      
    }
    
    
    //----------------------------------------------------------------------------------- position exclusive
    window.pos2;
    var pos = setPosition('#item');
    
    //console.log('size:'+size);

    for(var j=0;j<7;j++){
    for(var i=0;i<pos2.length;i++){

        var cond = ((pos2[i]-(size*6) <pos) &&( pos< pos2[i]+(size*6)) );
        if ( cond   ) {
        pos = setPosition('#item');
        //pos =(pos+size*6)%$('video').height();
        //console.log('■■ ■■■ ■■  Reset position...'+' cond: '+ pos2.length );
        }
    }
    }

    pos2.push(pos);
    if(pos2.length>7){
        pos2.shift();
    }
    //----------------------------------------------------------------------------------- position exclusive
    
    if(single_line==1){
        pos = $('#movie_player').height()*0.99;
    }
    else if(single_line==2){
        pos = $('#movie_player').height()*0.2;
    }


    var offset = nico_comment.offset({top:pos,   left:commentPos.left + $('#movie_player').width()});


    var animation = offset.animate(
    {left:-$(window).width()*5},  //{left:-$(window).width()*5}, {
    {
        duration: speed, // speed 20000 default
        easing: 'linear',
        queue: true,
        complete: function () {
            animation.hide();
            
        }
    });



}
//sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

function extraComment(color2='white',rand=0,excomment) {

    //console.log("■■■■ Time Comment ");

    
    var commentPos = $('#movie_player').offset();
    
    var nico_comment = $(excomment).appendTo("#movie_player");
    

    window.pos2;
    var pos = setPosition('#item');
    console.log('size:'+size);

    for(var j=0;j<6;j++){
    for(var i=0;i<pos2.length;i++){

        var cond = ((pos2[i]-(size*5) <pos) &&( pos< pos2[i]+(size*5)) );
        if ( cond   ) {
        pos = setPosition('#item');
        
        //console.log('■■ ■■■ ■■  Reset position...'+' cond: '+ pos2.length );
        }
    }
    }

    pos2.push(pos);
    if(pos2.length>6){
        pos2.shift();
    }
    
    
    //console.log('■■■■■■■■■■■ COLOR2: '+color2  );

    var offset = nico_comment.offset({top:pos,   left:commentPos.left + $('#movie_player').width()});


    var animation = offset.animate({left:-$(window).width()*5}, {
        duration: speed, // speed 20000 default
        easing: 'linear',
        queue: true,
        complete: function () {
            animation.hide();
        }
    });



}

function line_addcomment(){
    

    setTimeout(function(){

    var done = (parseInt($('#movie_player>#item').last().css('left'))+ (parseInt($('#movie_player>#item>#come').last().text().length)*0.5*size) <0);
    

    if( done ){
        
        addComment(color,rand_color);

    }
    },50);

}

//sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss


function choose(block,size) {
    var choices = [];
    for(var index=1;index<block;index++){
      choices.push(index*size);
    }
    //var index = Math.floor(Math.random() * choices.length);
    var j, x, i;
    for (i = choices.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = choices[i];
        choices[i] = choices[j];
        choices[j] = x;
    }

    return choices;
}

function waitForElement(elementPath, callBack){
  window.setTimeout(function(){
    if($(elementPath).length){
      callBack(elementPath, $(elementPath));
    }else{
      waitForElement(elementPath, callBack);
    }
  },500)
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function randomColor(max){
    color_idx =  Math.floor(Math.random() * Math.floor(max));
    if(color_idx==0){color='#000000'}
    else if(color_idx==1){color='#f9f9f9'}
    else if(color_idx==2){color='#3C6478'}
    else if(color_idx==3){color='#b5daff'}
    else if(color_idx==4){color='#93A661'}
    else if(color_idx==5){color='#70ff60'}
    else if(color_idx==6){color='#13a810'}
    else if(color_idx==7){color='#ffff2d'}
    else if(color_idx==8){color='#EBC944'}
    else if(color_idx==9){color='#cf20f7'}
    else if(color_idx==10){color='#F26D21'}
    else if(color_idx==11){color='#AD2A1A'}
    else if(color_idx==12){color='#ffccbc'}
    else if(color_idx==13){color='#1667bf'}
    else if(color_idx==14){color='#ed1c2d'}
    return color;
    //console.log("■■■■■■■■■■■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■  ■■■ "+color_idx);
}

function pickColor(sel){
    color_idx =  sel;
    if(color_idx==0){color='#000000'}
    else if(color_idx==1){color='#f9f9f9'}
    else if(color_idx==2){color='#3C6478'}
    else if(color_idx==3){color='#b5daff'}
    else if(color_idx==4){color='#93A661'}
    else if(color_idx==5){color='#70ff60'}
    else if(color_idx==6){color='#13a810'}
    else if(color_idx==7){color='#ffff2d'}
    else if(color_idx==8){color='#EBC944'}
    else if(color_idx==9){color='#cf20f7'}
    else if(color_idx==10){color='#F26D21'}
    else if(color_idx==11){color='#AD2A1A'}
    else if(color_idx==12){color='#ed1c2d'}
    return color;
    //console.log("■■■■■■■■■■■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■  ■■■ "+color_idx);
}



function setPosition(id) {
    
    var top = $('#movie_player').offset();  //#movie_player
    var itemHeight = $(id).height() ;
    var bottom = top.top + $('#movie_player').height() - itemHeight ;//
    if (bottom >= 50){ bottom -= 50}
    var length = bottom - top.top ;
    var num =  Math.random()
    while(num<0.1){num*=10}
    return bottom - length * num;
    //return bottom - length  * parseInt(Math.random()*100)/100;
    
}



//########################################################################################################
if(url=='https://www.youtube.com'||url=='https://www.youtube.com/'){
//if(url.includes("youtube.com/")){
    //$('#user').remove();
    $('#details>#user').remove();
    setTimeout(function(){
        
    for(var i=0; i<10;i++){
        
    $('<button id="user" style="background-color:#fff3e8;width:190px; color:black;z-index:99">'+
        'Add to FilterList</button>').prependTo($('#dismissable>#details').eq(i));

    }

    $('#details>#user').on('click',function(){
            
            var username = $(this).parent().children().eq(1).children().children().eq(2).html().split('</a>')[0].split('">').pop();
            
            if(nglist.includes(username)){   // already added
            alert('Already in search filter.');
            $(this).parent().parent().parent().parent().parent().remove();

            }else{
                if(lang.includes('en')){
                    confirm_text='Add "'+username+'" to search filter?';    
                }else{
                    confirm_text=lang_array[24];
                }
                

                if(confirm(confirm_text)){
                            
                $(this).parent().parent().parent().remove();
                nglist.push(username);

                chrome.storage.sync.set({ng:nglist});

                chrome.storage.sync.get(['ng'], function(result) {
                  nglist = result.ng;});

                setTimeout(function(){
                var s_string = '';
                s_string += '<option>- remove from filter -</option>';
                for(var i=0; i<nglist.length; i++){
    
                    s_string += ('<option value="'+nglist[i]+'">'+nglist[i]+'</option>');
                }

                $('#selectlist').html(s_string);
                
                },200);

                }

                }
            
        }  );
    },1800);
}
//########################################################################################################

if(url.includes("youtube.com/")&&url.length>18&&!(url.includes("watch?"))&&!(url.includes("/live_dashboard"))&&!(url.includes("/user/") )){

    

    var user;
    $('html, body').animate({scrollTop:($(document).height()*4)}, 10);
    $('html, body').animate({scrollTop:0}, 100);



    $('.text-wrapper>#user').remove();

    
    if(0){}else{
    setTimeout(function(){


    for(var y=0; y<nglist.length;y++){
             if (typeof $('ytd-channel-renderer').html() !=='undefined') {
            if($('ytd-channel-renderer').html().includes(nglist[y])){$('ytd-channel-renderer').remove();}
                }  
            }


    for(var i=0; i< $('#byline>a').length; i++){


        

    if($('ytd-video-meta-block > #metadata').eq(i).html().includes('"user"')){ 
        
        $('#metadata>button').off('click');

    }else{
        
        $('<div></div><button id="user" style="background-color:#fff3e8;width:300px; color:black;z-index:99">'+
        
        'Add to FilterList</button>').appendTo($('#dismissable>.text-wrapper').eq(i)); 

        
    }                                                               

        $('.text-wrapper>button').eq(i).on('click',function(){
            
            
            if(nglist.includes($(this).parent().children().children().eq(1).html().split('</a>')[0].split('">').pop())){   // already added
            alert('Already in search filter.');
            $(this).parent().parent().parent().remove();

            }else{

                if(lang.includes('en')){
                    confirm_text='Add "'+$(this).parent().children().children().eq(1).html().split('</a>')[0].split('">').pop()+'" to search filter?';    
                }else{
                    confirm_text=lang_array[24];
                }
                

                if(confirm(confirm_text)){
            
                $(this).parent().parent().parent().remove();
                nglist.push($(this).parent().children().children().eq(1).html().split('</a>')[0].split('">').pop());

                chrome.storage.sync.set({ng:nglist});

                chrome.storage.sync.get(['ng'], function(result) {
                  nglist = result.ng;});

                setTimeout(function(){
                var s_string = '';
                s_string += '<option>- remove from filter -</option>';
                for(var i=0; i<nglist.length; i++){
    
                    s_string += ('<option value="'+nglist[i]+'">'+nglist[i]+'</option>');
                }

                $('#selectlist').html(s_string);
                
                },200);

                }

                }
            
        }  );
    }

    },800); }

    setTimeout(function(){
    for(var i=0; i<$('#metadata>#byline-container').length;i++){
        for(var y=0; y<nglist.length;y++){
            if($('#metadata>#byline-container').eq(i).html().includes(nglist[y])){
            $('#metadata>#byline-container').eq(i).parent().parent().parent().parent().parent().remove();   } 
    }
    }
    }
    ,200);
    


}
//################################################################################################### watch? page
if(url.includes("youtube.com/watch?")){


var iconop=1;
var color = 'white';
var tcome = [];

var size = 34 // 34 default

var opacity = 0.25;
var opacity2 = 0.25;

var speed = 60000;


var rand_color=0;   




$('#nicolink').remove();

setTimeout(function(){
var nico_name = $('yt-formatted-string.ytd-video-primary-info-renderer').eq(1).html();


if(nico_name.includes('コメ付き】')){nico_name=nico_name.split('コメ付き】')[1]}
if(nico_name.includes('【コメント付き】')){nico_name=nico_name.split('【コメント付き】')[0]}
if(nico_name.includes('sm')){nico_name=nico_name.split('sm')[0]}

var nico_url = 'https://www.nicovideo.jp/search/'+nico_name;



if(0){

	var video_url=$('div#description >yt-formatted-string>a').attr('href')
	$('<a id="nicolink" href="'+video_url+'" target="_blank"><img style="zoom:110%" src="'+nicoicon+'""></a><span> </span>').prependTo($('yt-formatted-string.ytd-video-primary-info-renderer').eq(1));
}else{

$.ajax({ url: nico_url, success: function(data) { 
            //alert('data');
            //console.log(data);
            if(data.includes('検索のヒント')){
                

            }else{     

                data = data.split('="/watch/')[1];
            
            data = data.split('?')[0];    
            
            if(data.length>11){data = data.split('"')[0];}
            
            if(typeof data=='undefined'){
            }else{
            
            var video_url = 'https://www.nicovideo.jp/watch/'+data;
            
            
            $('<a id="nicolink" href="'+video_url+'" target="_blank"><img style="zoom:110%" src="'+nicoicon+'""></a><span> </span>').prependTo($('yt-formatted-string.ytd-video-primary-info-renderer').eq(1));
            }
            $('#nicolink').click(function(){$('.ytp-large-play-button').trigger('click')});
            


            }
            
             } });     // ajax		
	} // else
},2000);

chrome.storage.sync.get(['font'], function(result) {
      font = result.font;          });

setTimeout(function(){    if(typeof font =='undefined'){font=' ';}
 },100);


chrome.storage.sync.get(['rand_color'], function(result) {
      rand_color = result.rand_color;   	   });
setTimeout(function(){ if(typeof rand_color =='undefined'){rand_color = 0;} },1000);

chrome.storage.sync.get(['color'], function(result) {
      color = result.color;   	   });
setTimeout(function(){ if(typeof color =='undefined'){color = 'white';} },1000);


chrome.storage.sync.get(['speed'], function(result) {
      speed = result.speed;   	   });
setTimeout(function(){ if(typeof speed =='undefined'){
    speed = 60000;
    if(lang.includes('zh-TW')){speed=45000}
} },1000);


chrome.storage.sync.get(['iconop'], function(result) {
      iconop = result.iconop;
    });
setTimeout(function(){ if(typeof iconop =='undefined'){iconop = 1;} },1000);



chrome.storage.sync.get(['single_line'], function(result) {
      single_line = result.single_line;
    });
setTimeout(function(){ if(typeof single_line =='undefined'){single_line = 0;} },1000);

chrome.storage.sync.get(['opacity','size','like','icon','bar_hide'], function(result) {
      opacity = result.opacity;
      size = result.size;
      like = result.like;
      icon = result.icon;
      bar_hide = result.bar_hide;
      
    });

setTimeout(function(){ 
    if(typeof opacity =='undefined'){opacity = 0.5;}
    if(typeof size =='undefined'){size = 34;}
    if(typeof like =='undefined'){like = 1;}
    if(typeof icon =='undefined'){icon = 1;}
    if(typeof bar_hide =='undefined'){bar_hide = 1;}
    

 },1000);




var len=0;

var display = 'none';   
$('<div class="loading" id="overlay" style="position: fixed; display: '+display+'; width: 100%;height: 100%;top: 0; left: 0;right: 0;bottom: 0; background-color: rgba(0,0,0,0.4); z-index: 0;" ></div>"').appendTo('body');
$('<div class="loading" id="overlay2" style="position: fixed; display: none; width: 100%;height: 100%;top: 0; left: 0;right: 0;bottom: 0; background-color: rgba(0,0,0,0.9); z-index: 1000;" ></div>"').appendTo('body');

$('#overlay').on('click',function(){$('#overlay').hide();$('#masthead').css('opacity', 1);});


waitForElement('#sections',function(){

    $('.skiptranslate').remove();

    $('<div style="zoom:100%" id="google_translate_element"></div><script type="text/javascript">function googleTranslateElementInit() {  new google.translate.TranslateElement({pageLanguage: "id"}, "google_translate_element");}</script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>').prependTo('#secondary-inner');//appendTo('#simple-box');
  
  if(parseInt($('.ytp-chrome-bottom').css('width'))>1200){           
      	$('ytd-comments#comments').appendTo('#player-container');
        //$('ytd-comments#comments').prependTo('#secondary-inner');   
      	$('ytd-comments#comments').css('opacity', 0.1);
        $('ytd-comments#comments').css('height','60px');
  }else{
  $('ytd-comments#comments').prependTo('#secondary-inner');	}

  $('button.ytp-size-button.ytp-button').on('click',function(){   
  	
  	if(  parseInt($('.ytp-chrome-bottom').css('width'))>1100   ){
  		$('ytd-comments#comments').prependTo('#secondary-inner');
  		$('ytd-comments#comments').css('height','250px');
  		$('ytd-comments#comments').css('opacity', 1);
  	}else{
  		$('ytd-comments#comments').appendTo('#player-container');
  		
  		$('ytd-comments#comments').css('opacity', 0.1);
      	$('ytd-comments#comments').css('height','60px');

  	}
  	
  });
  


  $(document).keyup(function(e) {
     if (e.key === "Escape" ) { 
      $('#columns').css('background-color','white');
      $('ytd-comments#comments').prependTo('#secondary-inner');
      
      $('#masthead').css('opacity', 1);
      
    						}
	});


  if(parseInt($('.ytp-chrome-bottom').css('width'))<1000){

  	$('ytd-comments#comments').css({'width':'100%','border':'1px','height':'250px','overflow-y':'scroll','scroll-behavior':'smooth'});
  }else{
  	$('ytd-comments#comments').css({'width':'100%','border':'1px','height':'80px','overflow-y':'scroll','scroll-behavior':'smooth'});
  	$('ytd-comments#comments').css('opacity', 0.2);
  }

  $('html, body').animate({scrollTop:2}, 5);
        
  $('html, body').animate({scrollTop:0}, 5);
  

});

if ("onhashchange" in window) {
    var elems = document.querySelectorAll('#item');
    var length = elems.length;
    var index= 0 ;
   



    for (index ; index < length; index++) {
            
         elems[index].remove();
        };  

        

        setTimeout(function(){$('.html5-video-container').css('background-color','black');},5000);        

        
        $('#masthead').css('opacity', 1);


        waitForElement("#movie_player",function(){
    
        var flame = document.querySelector("#movie_player");
        flame.style = "overflow: hidden; width: 100%; position: relative; z-index: 1;"

        
        });
    }




waitForElement("#vote-count-left",function(){  

    window.time=0;
    if (!(typeof myVar == "undefined")){
        clearInterval(excome);
        clearInterval(myVar);
        }
    
    

    

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if($('#info').html().includes('id="time"') ){             // after second run


    
    var elems = document.querySelectorAll('#item');
    var length = elems.length;
    
    for (var index =0; index < length; index++) {
            
         elems[index].remove();
        };  
//-------------------------------

    idx2=1;

    $('#time').remove();
    $('<div id="time"></div>').prependTo('#info');
    
   
    playtime = $('.ytp-time-current').html();

    if(playtime.split(':').length>2){

      playtime = parseInt(playtime.split(':')[0])*60*60+parseInt(playtime.split(':')[1])*60+parseInt(playtime.split(':')[2]);
    }else{
      playtime = parseInt(playtime.split(':')[0])*60+parseInt(playtime.split(':')[1]);
    }

    time = playtime;
    


    var ptime = setInterval(  function(){
      time++;
      
      var second = Math.floor(time%(60));
      if(Math.floor(time%(60))<10){
        second = '0'+Math.floor(time%(60));
      }
      var mins = Math.floor((time%3600)/60);
      if(Math.floor((time%3600)/60)<10){
        mins = '0'+Math.floor((time%3600)/60);
      }

      $('#time').html(Math.floor(time/3600)+':'+mins+':'+second  );  
      
    },  1000);



    

}else{
    
    $("#simple-box").prependTo("#info");
    
    $('<div id="time"></div>').prependTo('#info');

    var time = 0;
    var playtime = 0;
    playtime = $('.ytp-time-current').html();

    $( ".ytp-time-display notranslate" ).change(function() {
      playtime = $('.ytp-time-current').html();
      alert('onchange');
    });

    
    
    if(playtime.split(':').length>2){

      playtime = parseInt(playtime.split(':')[0])*60*60+parseInt(playtime.split(':')[1])*60+parseInt(playtime.split(':')[2]);
    }else{
      
      playtime = parseInt(playtime.split(':')[0])*60+parseInt(playtime.split(':')[1]);
    }

    
    
    time = playtime;
    

    var totaltime = $('.ytp-time-duration').html();
    if(totaltime.split(':').length>2){

      totaltime = parseInt(totaltime.split(':')[0])*60*60+parseInt(totaltime.split(':')[1])*60+parseInt(totaltime.split(':')[2]);
    }else{
      totaltime = parseInt(totaltime.split(':')[0])*60+parseInt(totaltime.split(':')[1]);
    }


    var ptime = setInterval(  function(){
      time++;
      
      var second = Math.floor(time%(60));
      if(Math.floor(time%(60))<10){
        second = '0'+Math.floor(time%(60));
      }
      var mins = Math.floor((time%3600)/60);
      if(Math.floor((time%3600)/60)<10){
        mins = '0'+Math.floor((time%3600)/60);
      }

      $('#time').html(Math.floor(time/3600)+':'+mins+':'+second  );  
      
    },  1000);


    window.total = $(".count-text.style-scope.ytd-comments-header-renderer").html();




    total = parseInt(total.replace(',','').replace('Comments',''));

    
}
    
    
    $( "span#video-title, img, a.ytp-next-button" ).on('click',function() {
    
    clearInterval(ptime);
    clearInterval(excome);
    if(typeof myVar==='undefined'){}else{clearInterval(myVar);}
    if(typeof line==='undefined'){}else{clearInterval(line);}
    
    tcome = [];
    
    $('#time').remove();
    $('.html5-video-player>#item').remove();

    });
    
    if(typeof $('#buttons>ytd-button-renderer>a').attr('href') !=='undefined'){

    }else{
        $("#simplebox-placeholder").trigger("click");
        $("#cancel-button>.yt-simple-endpoint>#button").trigger("click");
    }
   
//788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
for(var i=0;i<$("#btns").length;i++){
    $("#btns").eq(i).remove();  }

$("#btns2").remove();

var btn_color='#5697ff';
var color_idx=1;    

var onoff = 0;



var buttoNS=document.createElement("div");
buttoNS.setAttribute('id','btns');

var buttoNS2=document.createElement("div");
buttoNS2.setAttribute('id','btns2');




setTimeout(function(){
    for(var i=0; i<$('#metadata>#byline-container').length;i++){
        for(var y=0; y<nglist.length;y++){
            if($('#metadata>#byline-container').eq(i).html().includes(nglist[y])){
            $('#metadata>#byline-container').eq(i).parent().parent().parent().parent().parent().remove();   } 
    }
}
    }
    ,100);
//--------------------------------------------------------------------
setTimeout(function(){

    $('.goog-te-combo').val('jw').trigger('change');  
    

    if(single_line==0){
            $('#btn9').trigger('click');        }

    if(single_line!=0){
            
            addComment(color,rand_color);
            line = setInterval(function(){line_addcomment(); },1000) ;

                    }
    
    if($('.goog-te-combo').length>1){
        
    $('.skiptranslate').eq(0).remove();}
    }
    ,1600);



$('#stopscroll').remove();
$('#copyto').remove();

var stopscroll ='<paper-button id="stopscroll" role="button" tabindex="0" aria-disabled="false" elevation="0" class="style-scope.ytd-subscribe-button-renderer" style="background-color: #5697ff ; width:113px; z-index:999"><span style="color:white">stop scrolling </span></paper-button>';
if(lang.includes('en')){}else{
    var stopscroll ='<paper-button id="stopscroll" role="button" tabindex="0" aria-disabled="false" elevation="0" class="style-scope.ytd-subscribe-button-renderer" style="background-color: #5697ff ; width:113px; z-index:999"><span style="color:white">'+lang_array[16]+'</span></paper-button>';
    }


if(lang.includes('en')){
    var copyto ='<paper-button id="copyto" role="button" tabindex="0"  aria-disabled="false" elevation="0" class="style-scope.ytd-subscribe-button-renderer" style="background-color: #5697ff ; z-index:999"><span style="color:white">copy to clipboard</span></paper-button>';    
}else{
    var copyto ='<paper-button id="copyto" role="button" tabindex="0"  aria-disabled="false" elevation="0" class="style-scope.ytd-subscribe-button-renderer" style="background-color: #5697ff ; z-index:999"><span style="color:white">'+$('#copyto').text(lang_array[18])+'</span></paper-button>';
}

var fontlist=[
    'Comic Sans MS, cursive, sans-serif',
    'JP_EN__genno_meicho',
    'JP_EN__SoukouMincho',
    'JP_EN__Senobi-Gothic-Regular',
    'JP_EN__OtsutomeFont_Ver2',
    'JP_EN__komorebi-gothic',
    'JP_EN__hkkoinkk',
    'JP_EN__GN-KillGothic-U-KanaO',
    'JP_EN__genkai-mincho',
    'JP_EN_PixelMplus10-Regular',
    'JP_EN_PixelMplus12-Regular',
    'JP_EN__dejima-mincho-r227',
    'JP_EN__aoyagireisyosimo_ttf_2_01',
    'JP_EN__Aoyagikouzan',
    'JP_doseisan',
    'JP_EN__Ronde-B_square',
    'JP_EN__mushin',
    'JP_EN__memoir',
    'JP_EN__Makinas-4-Square',
    'JP_EN__kemono',
    'EN__RINGM',
    'EN__Resident_Evil_Large',
    'EN__PrinceValiant',
    'EN__Play-Bold',
    'EN__OptimusPrincepsSemiBold',
    'EN__Onciale PhF01',
    'EN__AGENG',
    'EN__MGS2',
    'EN__Lollipoptron',
    'EN__Incised Black Wide',
    'EN__Final-Fantasy',
    'EN__anirb',
    'EN__OldeEnglish',
    'EN__Ancient Medium',
    
    'EN__1456Gutenberg',
    'EN__ferrum',
    'EN__BOOKmanOpti-Light',
    'EN__BOOKmanOpti-Bold',
    'EN__Albertella-Light',


    'EN__Wantedo',
    'EN__Durango Western Eroded Demo',
    'EN__Cowboys20',
    'EN__Wantedo',
    'EN__Saddlebag',

    'EN__Freight Train Gangsta',
    'EN__Splatter Kings',
    'EN__lexo',
    'EN__Font el font bubble',
    'EN__beatstreet',
    'EN__DonGraffiti',
    'EN__VTKS_Autorized_2',
    'EN__MLBANGEL',
    'EN__SEGA',
    'EN__Norse',
    'EN__Dovahkiin'
];

var s_string='';

var ngbox='<div id="ngbox" style="padding-top:3px;padding-left:4px; z-index:999"><input title=\'input "--number" to filter comment by length. e.g.--40\' id="ngword" style="padding-left:0px; width:110px;height:19px"';

if(lang.includes('en')){
    ngbox +=' placeholder="Add banned word" value=""  >';

}else{
    ngbox +=' placeholder="'+lang_array[20]+'" value=""  >';    
}


ngbox +=' <button id="ngit"   ';
ngbox +=' style="background-color: #5697ff; z-index:999;height:26px">';


if(lang.includes('en')){
    ngbox +='<span style="color:white">ADD</span></button>';
}else{
    
    ngbox +='<span style="color:white">'+lang_array[21]+'</span></button>';    
}

ngbox +=' </div>';


if($('#ngbox').length>0){
    $('#ngbox').eq(0).remove();   
}

$(ngbox).prependTo('#secondary-inner');


$('#ngit').click(function(){                 
    
    if($('#ngword').val().includes('--')){

        var index = ngwords.indexOf($( "#selectngword option:contains('--')" ).text());
        
        ngwords.splice(index, 1);

        
        $( "#selectngword option:contains('--')" ).hide();
        chrome.storage.sync.set({ngword:ngwords});
        
    }
    if(ngwords.includes($('#ngword').val())){   // already added
            alert('Already in word filter.');        

            }else{
                ngwords.push($('#ngword').val());
                            
                
                if(lang.includes('en')){
                    $('#ngword').attr('placeholder','added.');

                }else{
                    $('#ngword').attr('placeholder',lang_array[22]);
                    
                }

                $('#ngword').val('');
                chrome.storage.sync.set({ngword:ngwords});                

                chrome.storage.sync.get(['ngword'], function(result) {
                  ngwords = result.ngword;});

                setTimeout(function(){
                var ngwlist_string = '';


                
                ngwlist_string += '<option>- remove banned word -</option>';

                for(var i=0; i<ngwords.length; i++){
    
                    ngwlist_string += ('<option value="'+ngwords[i]+'">'+ngwords[i]+'</option>');
                }

                $('#selectngword').html(ngwlist_string);
                
                },200);

                }

});

    
    var ngwlist_string = '';
    ngwlist_string += '<option>- remove banned word -</option>';
    for(var i=0; i<ngwords.length; i++){
        
        ngwlist_string += ('<option value="'+i+'">'+ngwords[i]+'</option>');

    }

    ngwlist_string = '<select id="selectngword" style="height:26px">'+ ngwlist_string+'</select>';     
    
    
    $(ngwlist_string).appendTo('#ngbox');         

    $('#selectngword').on('change',function(){     
        if($( "#selectngword option:selected" ).text().includes('remove banned')){}else{
        
        var index = ngwords.indexOf($( "#selectngword option:selected" ).text());
        
        ngwords.splice(index, 1);

        $( "#selectngword option:selected" ).hide();
        chrome.storage.sync.set({ngword:ngwords});
        }
        $('#selectngword').val('removed');
    });
    

    if(lang.includes('en')){
        s_string += '<option> Font </option>';

    }else{
        s_string += '<option> '+lang_array[19]+' </option>';
    }

    
    s_string += '<option > Random Font </option>';
    for(var i=0; i<fontlist.length; i++){
        
        s_string += ('<option value="'+fontlist[i]+'"style="font-family:'+fontlist[i]+'"　>ABC abc あいう 123　正</option>');

    }

    s_string = '<select  id="selectfont" style="width:75px; zoom:127%">'+ s_string+'</select>';     


if($('#selectfont').length>0){
    $('#selectfont').eq(0).remove();   
}

$(s_string).prependTo('#secondary-inner');  

$('option[value*=\'JP_\']').css('background-color','#fff4f4');

$(copyto).prependTo('#secondary-inner'); 
$(stopscroll).prependTo('#secondary-inner');



$('#selectfont').on('change',function(){
    font = $('#selectfont').val();
    
    chrome.storage.sync.set({font:font});
    
    if($('#selectfont').val() == 'Random Font'){
        font = fontlist[Math.floor((Math.random()*100))%fontlist.length-1];
        $('#selectfont').val('Font');
    }
    if($('#selectfont').val() == 'Font' || $('#selectfont').val() == lang_array[19]){    }


    if(typeof myVar==='undefined'){
    }else{
        clearInterval( myVar);    
    }
    myVar = setInterval(  function(){addComment(color,rand_color);},  3300); 
    
    });


if(clipboard==1){
        $('#copyto').css({'background-color':'#5697ff','color':'white'});
        $('#copyto').text('copy Japanese');
    }else if(clipboard==2){
        $('#copyto').css({'background-color':'#5697ff','color':'white'});
        $('#copyto').text('copy English');
    
    }else{$('#copyto').css({'background-color':'#5697ff','color':'white'});
            $('#copyto').text('copy to clipboard');
            if(!(lang.includes('en'))){
                $('#copyto').text(lang_array[18]);
            }
        }



$('#copyto').on('click',function(){
    window.clipboard;
    clipboard = (clipboard+1)%3;
    chrome.storage.sync.set({clipbutton:clipboard});

    if(clipboard==1){
        $('#copyto').css({'background-color':'#5697ff','color':'white'});
        $('#copyto').text('copy Japanese');
    }else if(clipboard==2){
        $('#copyto').css({'background-color':'#5697ff','color':'white'});
        $('#copyto').text('copy English');
    
    }else{$('#copyto').css({'background-color':'#9e9c9c','color':'white'});
            $('#copyto').text('stopped');
        }
    

})

$('#stopscroll').on('click',function(){
    if(scrollonoff==0){
        tcome=[];
        single_line = 0;
        chrome.storage.sync.set({single_line:single_line});
        if(typeof line ==='undefined'){}else{clearInterval(line);}
        if(typeof myVar ==='undefined'){}else{clearInterval(myVar);}

    
        inputo1.innerHTML='single-line:off';inputo1.setAttribute('style','background-color: #7a7a7a; height:0.5px; border: thin solid #5697ff; z-index:999;color:white'); 
        if(!(lang.includes('en'))){ inputo1.innerHTML=lang_array[12+single_line];}

        if(lang.includes('en')){
            $(this).html('<span style="color:white">restart</span>');
            
        }else{
            $(this).html('<span style="color:white">'+lang_array[17]+'</span>');
            
        }
        var elems = document.querySelectorAll('#item');
        var length = elems.length;
        for (var index = 0 ; index < length; index++) {
            elems[index].style.display = "none";
        };

        
        
    
        scrollonoff=(scrollonoff+1)%2;

    }else{
        idx=0;
        tcome=[];
        
        if(lang.includes('en')){
            $(this).html('<span style="color:white;">stop scrolling</span>');
        }else{
            
            $(this).html('<span style="color:white;">'+lang_array[16]+'</span>');
        }

        myVar = setInterval(  function(){addComment(color,rand_color);},  3300); 
        $('ytd-comments#comments').animate({scrollTop:0}, 1);
        scrollonoff=(scrollonoff+1)%2;
    }
    

})




var input1=document.createElement("paper-button"); 
var input2=document.createElement("a"); 

input1.innerHTML='color';
if(lang.includes('en')){}else{
    input1.innerHTML=lang_array[0];
}


input1.setAttribute('id','btm1');
input1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
input1.setAttribute('style','background-color: '+btn_color+'; z-index:999;color:white; fontWeight:bolder');
input1.setAttribute('title','change comment color');

input2.setAttribute('style',"text-decoration: none; zoom:90%; ");

input2.setAttribute('id',"btnA");
//======================================================================================== 
$('#btnA').append(input1);
buttoNS.appendChild(input2); 
$("#info").prepend(buttoNS);


$('#btnA').click( function(e) {
    e.preventDefault(); 
    rand_color=0;
    
    chrome.storage.sync.set({rand_color:rand_color});

    color_idx=(color_idx+1)%15;
    if(color_idx==0){color='#000000'}
    else if(color_idx==1){color='#f9f9f9'}
    else if(color_idx==2){color='#3C6478'}
    else if(color_idx==3){color='#b5daff'}
    else if(color_idx==4){color='#93A661'}
    else if(color_idx==5){color='#70ff60'}
    else if(color_idx==6){color='#13a810'}
    else if(color_idx==7){color='#ffff2d'}
    else if(color_idx==8){color='#EBC944'}
    else if(color_idx==9){color='#cf20f7'}
    else if(color_idx==10){color='#F26D21'}
    else if(color_idx==11){color='#AD2A1A'}
    else if(color_idx==12){color='#ffccbc'}
    else if(color_idx==13){color='#1667bf'}
    else if(color_idx==14){color='#ed1c2d'}

    //console.log('■■■■■ COLOR to: '+color);

    chrome.storage.sync.set({color:color});
    var elems = document.querySelectorAll('#item');
    var length = elems.length;
    for (var index = 0 ; index < length; index++) {
        elems[index].style.color = color;
    };
    rand_color = 0;


    input1.setAttribute('style','background-color:'+color); 

    return false; } );
    


$('#btnA').append(input1);


buttoNS.appendChild(input2); 
$("#info").prepend(buttoNS);


//======================================================================================== RANDOM

var inputC1=document.createElement("paper-button"); 
var inputC2=document.createElement("a"); 

inputC1.innerHTML='random'; // on/off 💬
if(lang.includes('en')){}else{
    inputC1.innerHTML=lang_array[1];
}

inputC1.setAttribute('id','btn3');
inputC1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputC1.setAttribute('style','background-color: #5697ff ; z-index:999;color:white; fontWeight:bolder');
inputC1.setAttribute('title','random comment color');

inputC2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputC2.setAttribute('id',"btnC");




$('#btnC').append(inputC1);

buttoNS.appendChild(inputC2); // buttoNS
$("#info").prepend(buttoNS);

$('#btnC').click( function(e) {
    e.preventDefault(); 
    if(rand_color==1){rand_color=0}else{rand_color=1}
    
    chrome.storage.sync.set({rand_color:rand_color});
    
    clearInterval( myVar);
    myVar = setInterval(  function(){addComment(color,rand_color);},  3300);  // RANDOM COLOR

    return false;
     } );




$('#btnC').append(inputC1);


buttoNS.appendChild(inputC2); 
$("#info").prepend(buttoNS);


//========================================================================================  max min opacity
var inputB1=document.createElement("paper-button"); 
var inputB2=document.createElement("a"); 
    

inputB1.setAttribute('id','btm2');
inputB1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputB1.setAttribute('style',' z-index:999;color:white; fontWeight:bolder');
inputB1.setAttribute('title','hide/show comments');

    if(iconop==1){
        inputB1.innerHTML='hide';inputB1.setAttribute('style','background-color: #7a7a7a;color:white; fontWeight:bolder'); // on/off 💬
        if(lang.includes('en')){}else{
        inputB1.innerHTML=lang_array[3];
        }

    }else{
        inputB1.innerHTML='show'; inputB1.setAttribute('style','background-color: #eaedff;border: thin solid #5697ff;');
        if(lang.includes('en')){}else{
        inputB1.innerHTML=lang_array[2];
        }
    }

inputB2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputB2.setAttribute('id',"btnB");



$('#btnB').append(inputB1);

buttoNS.appendChild(inputB2); // buttoNS
$("#info").prepend(buttoNS);

$('#btnB').click( function(e) {
    e.preventDefault(); 
    
    onoff = (onoff+1)%2; 
    if(opacity==0){opacity=opacity2;}
    else{opacity=0;}

    chrome.storage.sync.set({opacity:opacity});
    
    var elems = document.querySelectorAll('#come');
    var icons = document.querySelectorAll('#icon');
    var length = elems.length;
    for (var index = 0 ; index < length; index++) {

        elems[index].style.opacity = opacity;

        if(opacity==0){iconop=0}else{iconop=1}
        icons[index].style.opacity = iconop;
        
    };
    chrome.storage.sync.set({iconop:iconop});
    if(iconop==1){
    inputB1.innerHTML='hide';inputB1.setAttribute('style','background-color: #7a7a7a;color:white; fontWeight:bolder'); // on/off 💬
        if(lang.includes('en')){}else{
        inputB1.innerHTML=lang_array[3];}
    }else{inputB1.innerHTML='show'; 
        inputB1.setAttribute('style','background-color: #eaedff;border: thin solid #5697ff;');
        if(lang.includes('en')){}else{
        inputB1.innerHTML=lang_array[2];}
    }

    return false;
     } );

$('#btnB').append(inputB1);


buttoNS.appendChild(inputB2); // buttoNS
$("#info").prepend(buttoNS);


//======================================================================================== Opacity +0.25

var inputD1=document.createElement("paper-button"); 
var inputD2=document.createElement("a"); 

inputD1.innerHTML='opacity'; // on/off 💬
if(lang.includes('en')){}else{
        inputD1.innerHTML=lang_array[4];}

inputD1.setAttribute('id','btn4');
inputD1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputD1.setAttribute('style','background-color: #5697ff ; z-index:999;color:white; fontWeight:bolder');
inputD1.setAttribute('title','change opacity');

inputD2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputD2.setAttribute('id',"btnD");
//input.setAttribute('role','button');

$('#btnD').append(inputD1);

buttoNS.appendChild(inputD2); // buttoNS
$("#info").prepend(buttoNS);

$('#btnD').click( function(e) {
    e.preventDefault(); 
    
    opacity = (opacity+0.25)%1.00000000001; 
    opacity2 = opacity;

    chrome.storage.sync.set({opacity:opacity});


    var elems = document.querySelectorAll('#come');
    var length = elems.length;
    for (var index = 0 ; index < length; index++) {
        elems[index].style.opacity = opacity;

    };


    return false;
     } );


$('#btnD').append(inputD1);


buttoNS.appendChild(inputD2); // buttoNS
$("#info").prepend(buttoNS);
//======================================================================================== <<

var inputE1=document.createElement("paper-button"); 
var inputE2=document.createElement("a"); 

inputE1.innerHTML='< <'; // on/off 💬
if(lang.includes('en')){}else{
        inputE1.innerHTML=lang_array[5];}


inputE1.setAttribute('id','btn5');
inputE1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputE1.setAttribute('style','background-color: #5697ff ; z-index:999;color:white; fontWeight:bolder');
inputE1.setAttribute('title','more faster');

inputE2.setAttribute('style',"text-decoration: none; zoom:90%");
inputE2.setAttribute('id',"btnE");


$('#btnE').append(inputE1);
buttoNS.appendChild(inputE2); // buttoNS


$("#info").prepend(buttoNS);


$('#btnE').click( function(e) {
    e.preventDefault(); 
    
    var elems = document.querySelectorAll('#item');
    var length = elems.length;
    for (var index = 0 ; index < length; index++) {
        elems[index].style.display = "none";
    };


    speed = speed-5000;
    if(speed<=4000){speed=3000;}

    chrome.storage.sync.set({speed:speed});
    clearInterval( myVar);
    myVar = setInterval(  function(){addComment(color,rand_color);},  3300);
    return false;
     } );


$('#btnE').append(inputE1);
buttoNS.appendChild(inputE2); // buttoNS


$("#info").prepend(buttoNS);
//======================================================================================== >>

var inputF1=document.createElement("paper-button"); 
var inputF2=document.createElement("a"); 

inputF1.innerHTML='> >'; // on/off 💬
if(lang.includes('en')){}else{
        inputF1.innerHTML=lang_array[6];}


inputF1.setAttribute('id','btn6');
inputF1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputF1.setAttribute('style','background-color: #5697ff ; z-index:999;color:white; fontWeight:bolder');
inputF1.setAttribute('title','more slower');

inputF2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputF2.setAttribute('id',"btnF");


$('#btnF').append(inputF1);

buttoNS.appendChild(inputF2); // buttoNS

$("#info").prepend(buttoNS);


$('#btnF').click( function(e) {
    e.preventDefault(); 


    speed = speed+5000;
    if(speed>=70000){speed=70000;}
    chrome.storage.sync.set({speed:speed});
    clearInterval( myVar);
    myVar = setInterval(  function(){addComment(color,rand_color);},  3300);
    return false;
     } );


$('#btnF').append(inputF1);

buttoNS.appendChild(inputF2); // buttoNS

$("#info").prepend(buttoNS);



//========================================================================================　font-size  up
var inputSIZE=document.createElement("div");
inputSIZE.setAttribute('id','fontsize');


var inputG1=document.createElement("paper-button"); 
var inputG2=document.createElement("a"); 

inputG1.innerHTML='size ＋'; // on/off 💬
if(lang.includes('en')){}else{
        inputG1.innerHTML=lang_array[7];}


inputG1.setAttribute('id','btn7');
inputG1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputG1.setAttribute('style','background-color: #5697ff ; z-index:999;color:white; fontWeight:bolder');
inputG1.setAttribute('title','increase font size');

inputG2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputG2.setAttribute('id',"btnG");


$('#btnG').append(inputG1);
buttoNS.appendChild(inputG2); // buttoNS
$("#info").prepend(buttoNS);


$('#btnG').click( function(e) {
    e.preventDefault(); 
 
    size = (size+1.5);
    

    chrome.storage.sync.set({size:size});
    window.size = size;
    
    var elems = document.querySelectorAll('#item');
    var iconzoom =document.querySelectorAll('#iconimg');


    var length = elems.length;
    for (var index = 0 ; index < length; index++) {
        
        elems[index].style.fontSize = size+'px';  
        iconzoom[index].style.zoom = size/34;        

    };


    return false;
     } );

$('#btnG').append(inputG1);
buttoNS.appendChild(inputG2); // buttoNS
$("#info").prepend(buttoNS);




//======================================================================================== font-size  down

var inputH1=document.createElement("paper-button"); 
var inputH2=document.createElement("a"); 

inputH1.innerHTML='size -'; // on/off 💬
if(lang.includes('en')){}else{
        inputH1.innerHTML=lang_array[8];}

inputH1.setAttribute('id','btn8');
inputH1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputH1.setAttribute('style','background-color: #5697ff ; z-index:999;color:white; fontWeight:bolder');
inputH1.setAttribute('title','decrease font size');

inputH2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputH2.setAttribute('id',"btnH");


$('#btnH').append(inputH1);

buttoNS.appendChild(inputH2); // buttoNS
$("#info").prepend(buttoNS);


$('#btnH').click( function(e) {
    e.preventDefault(); 
 
    size = (size-1.5);
    

    chrome.storage.sync.set({size:size});

    var elems = document.querySelectorAll('#item');
    var iconzoom =document.querySelectorAll('#iconimg');

    var length = elems.length;
    for (var index = 0 ; index < length; index++) {
        
        elems[index].style.fontSize = size+'px';     
        iconzoom[index].style.zoom = size/34;        
        

    };


    return false;
     } );


$('#btnH').append(inputH1);

buttoNS.appendChild(inputH2); // buttoNS
$("#info").prepend(buttoNS);
//cont.appendChild(inputH2);

//========================================================================================

var inputI1=document.createElement("paper-button"); 
var inputI2=document.createElement("a"); 

inputI1.innerHTML='replay'; // on/off 💬

if(lang.includes('en')){}else{
        inputI1.innerHTML=lang_array[9];}

inputI1.setAttribute('id','btn9');
inputI1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputI1.setAttribute('style','background-color: #5697ff ; z-index:999;color:white; fontWeight:bolder');
inputI1.setAttribute('title','replay from first comment');

inputI2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputI2.setAttribute('id',"btnI");




$('#btnI').append(inputI1);

buttoNS.appendChild(inputI2); // buttoNS
$("#info").prepend(buttoNS);

$('#btnI').click( function(e) {
    e.preventDefault(); 
    
    var elems = document.querySelectorAll('#item');
    var length = elems.length;
    for (var index = 0 ; index < length; index++) {
        elems[index].style.display = "none";
    };


    idx=0;
    clearInterval(myVar);
    $('ytd-comments#comments').animate({scrollTop:0}, 1);
    //addComment(color,rand_color);
    myVar = setInterval(  function(){addComment(color,rand_color);},  3300);

    return false;
     } );

$('#btnI').append(inputI1);

buttoNS.appendChild(inputI2); // buttoNS
$("#info").prepend(buttoNS);


//========================================================================================

var inputJ1=document.createElement("paper-button"); 
var inputJ2=document.createElement("a"); 

inputJ1.innerHTML='💡'; // on/off 💬  light on off

inputJ1.setAttribute('id','btm10'); 
inputJ1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputJ1.setAttribute('style','background-color: #5697ff; z-index:999;color:white; fontWeight:bolder');
inputJ1.setAttribute('title','lights on/off');

inputJ2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputJ2.setAttribute('id',"btnJ");



$('#btnJ').append(inputJ1);

buttoNS.appendChild(inputJ2); // buttoNS
$("#info").prepend(buttoNS);

$('#btnJ').click( function(e) {
    e.preventDefault(); 
    $('#masthead').css('opacity', 0.1);
    
    $('#overlay').show();//onoff++;

     } );


$('#btnJ').append(inputJ1);

buttoNS.appendChild(inputJ2); // buttoNS
$("#info").prepend(buttoNS);

//======================================================================================== pop up window

var inputk1=document.createElement("paper-button"); 
var inputk2=document.createElement("a"); 

inputk1.innerHTML='popup'; // on/off 💬  light on off
if(lang.includes('en')){}else{
        inputk1.innerHTML=lang_array[11];}


inputk1.setAttribute('id','btm11'); 
inputk1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputk1.setAttribute('style','background-color: #e23846; height:20px; z-index:999;color:white; fontWeight:bolder');
inputk1.setAttribute('title','popup window');

inputk2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputk2.setAttribute('id',"btnk");



$('#btnk').append(inputk1);

buttoNS.appendChild(inputk2); // buttoNS
$("#info").prepend(buttoNS);

$('#btnk').click( function(e) {
    e.preventDefault(); 

    
    vlist='off';
    url  = window.location.href;
    if(url.includes('&')){vid=url.split('v=')[1].split('&')[0];}
    else{vid=url.split('v=')[1]}

    if(url.includes('&list=')){
        if(url.split('&list=')[1].includes('&')){
            vlist = url.split('&list=')[1].split('&')[0];
        }else{vlist = url.split('&list=')[1];}
    }

    $('.ytp-large-play-button.ytp-button').trigger('click');

    var index = parseInt(url.split('&index=')[1])-1;
    if(vlist!='off'){
        window.open('https://www.youtube.com/embed?listType=playlist&list='+vlist+'&index='+index +'&start='+playtime+'&autoplay=1',"_blank");}
    else{

        var win =window.open('https://www.youtube.com/embed/'+vid +'?start='+playtime+'&autoplay=1', "window" , 
            'menubar=no,location=no,resizable=no,scrollbars=no,status=yes,toolbar=no,width='+$("video").width()/1.5+',height='+$("video").height()/1.5+',left='+$("video").width()*2.7+',top='+$("video").height()/3+'');
            window.moveTo(20, 20);

    }
    


     } );


$('#btnk').append(inputk1);

buttoNS.appendChild(inputk2); // buttoNS
$("#info").prepend(buttoNS);

//===============================================================================================

var inputl1=document.createElement("paper-button"); 
var inputl2=document.createElement("a"); 

if(like==0){
    inputl1.innerHTML='👍off';inputl1.setAttribute('style','background-color: #7a7a7a; height:0.7px; border: thin solid #5697ff; z-index:999;color:white; fontWeight:bolder;color:white'); // on/off 💬
    }else{inputl1.innerHTML='👍on'; inputl1.setAttribute('style','background-color: #eaedff; height:0.7px; border: thin solid #5697ff; z-index:999');}



inputl1.setAttribute('id','btm12'); 
inputl1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputl1.setAttribute('title','comment likes on/off');

inputl2.setAttribute('style',"text-decoration: none; zoom:110%;");
inputl2.setAttribute('id',"btnl");




$('#btnl').append(inputl1);

buttoNS.appendChild(inputl2); // buttoNS
$("#info").prepend(buttoNS);

$('#btnl').click( function(e) {
    e.preventDefault(); 

    like = (like+1)%2; 
    
    chrome.storage.sync.set({like:like});
    


    if(like==0){
        inputl1.innerHTML='👍off';inputl1.setAttribute('style','background-color: #7a7a7a; height:0.5px; border: thin solid #5697ff; z-index:999;color:white'); // on/off 💬
        }else{inputl1.innerHTML='👍on'; inputl1.setAttribute('style','background-color:  #eaedff; height:0.5px; border: thin solid #5697ff; z-index:999');}
    return false;

     } );


$('#btnl').append(inputl1);

buttoNS.appendChild(inputl2); // buttoNS
$("#info").prepend(buttoNS);
//=============================================================================================== face on/off

var inputm1=document.createElement("paper-button"); 
var inputm2=document.createElement("a"); 

if(icon==0){
    inputm1.innerHTML='😶off';inputm1.setAttribute('style','background-color: #7a7a7a; height:0.7px; border: thin solid #5697ff; z-index:999;color:white'); // on/off 💬
    }else{inputm1.innerHTML='😶on'; inputm1.setAttribute('style','background-color: #eaedff; height:0.7px; border: thin solid #5697ff; z-index:999');}



inputm1.setAttribute('id','btn13'); 
inputm1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputm1.setAttribute('title','comment icon on/off');

inputm2.setAttribute('style',"text-decoration: none; zoom:110%;");
inputm2.setAttribute('id',"btnm");


$('#btnm').append(inputm1);

buttoNS.appendChild(inputm2); // buttoNS
$("#info").prepend(buttoNS);

$('#btnm').click( function(e) {
    e.preventDefault(); 

    icon = (icon+1)%2; 

    chrome.storage.sync.set({icon:icon});


    if(icon==0){
        inputm1.innerHTML='😶off';inputm1.setAttribute('style','background-color: #7a7a7a; height:0.7px; border: thin solid #5697ff; z-index:999;color:white'); // on/off 💬
        }else{inputm1.innerHTML='😶on'; inputm1.setAttribute('style','background-color: #eaedff; height:0.7px; border: thin solid #5697ff; z-index:999');}

    return false;

     } );


$('#btnm').append(inputm1);

buttoNS.appendChild(inputm2); // buttoNS
$("#info").prepend(buttoNS);




//=============================================================================================== single line

var inputo1=document.createElement("paper-button"); 
var inputo2=document.createElement("a"); 

if(single_line==0){
    inputo1.innerHTML='single  line off';
    if(!(lang.includes('en'))){ inputo1.innerHTML=lang_array[12+single_line];}
    inputo1.setAttribute('style','background-color: #7a7a7a; height:0.7px; border: thin solid #5697ff; z-index:999;color:white'); 

    }else if(single_line==1){
            
        inputo1.innerHTML='single  line  bottom'; inputo1.setAttribute('style','background-color: #eaedff; height:0.7px; border: thin solid #5697ff; z-index:999');}
        if(!(lang.includes('en'))){ inputo1.innerHTML=lang_array[12+single_line];}
    else if(single_line==2){
        inputo1.innerHTML='single  line  top'; 
        if(!(lang.includes('en'))){ inputo1.innerHTML=lang_array[12+single_line];}
        inputo1.setAttribute('style','background-color: #eaedff; height:0.7px; border: thin solid #5697ff; z-index:999');}


inputo1.setAttribute('id','btn15'); 
inputo1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputo1.setAttribute('title','show comment in a single-line');

inputo2.setAttribute('style',"text-decoration: none; zoom:110%;");
inputo2.setAttribute('id',"btno");

$('#btno').append(inputo1);

buttoNS.appendChild(inputo2); // buttoNS
$("#info").prepend(buttoNS);

$('#btno').click( function(e) {   
    e.preventDefault(); 

    single_line = (single_line +1)%3;
    
    //alert('f');
    chrome.storage.sync.set({single_line:single_line});


    if(single_line==0){ // from on to off
        myVar = setInterval(  function(){addComment(color,rand_color);},  3300);
        clearInterval(line);
        inputo1.innerHTML='single-line:off';
        if(!(lang.includes('en'))){ inputo1.innerHTML=lang_array[12];}
        inputo1.setAttribute('style','background-color: #7a7a7a; height:0.5px; border: thin solid #5697ff; z-index:999;color:white'); 
        }else if(single_line==1){         // from off to on
            
            scrollonoff=0;
            $('#stopscroll').html('<span style="color:white;">stop scrolling</span>');

            if(lang.includes('en')){}else{
                $('#stopscroll').html('<span style="color:white;">'+lang_array[16]+'</span>');}

            if(typeof myVar ==='undefined'){}else{ clearInterval(myVar);}
            line = setInterval(function(){line_addcomment(); },1000) ;
            inputo1.innerHTML='single-line:bottom'; 
            if(!(lang.includes('en'))){ inputo1.innerHTML=lang_array[13];}
            inputo1.setAttribute('style','background-color: #eaedff; height:0.5px; border: thin solid #5697ff; z-index:999');
        }

        else if(single_line==2){
            scrollonoff=0;
            $('#stopscroll').html('<span style="color:white;">stop scrolling</span>');
        
            if(lang.includes('en')){}else{
                $('#stopscroll').html('<span style="color:white;">'+lang_array[16]+'</span>');}

            inputo1.innerHTML='single-line:top'; 
            if(!(lang.includes('en'))){ inputo1.innerHTML=lang_array[14];}
            inputo1.setAttribute('style','background-color: #eaedff; height:0.5px; border: thin solid #5697ff; z-index:999');}      
    
     } );


$('#btno').append(inputo1);

buttoNS.appendChild(inputo2); // buttoNS
$("#info").prepend(buttoNS);

//=============================================================================================== full screen

var inputp1=document.createElement("paper-button"); 
var inputp2=document.createElement("a"); 


            
inputp1.innerHTML='↕ fullwindow'; 
if(lang.includes('en')){}else{
            inputp1.innerHTML=lang_array[15];}

inputp1.setAttribute('style','background-color: #eaedff; height:0.7px; border: thin solid #5697ff; z-index:999');


inputp1.setAttribute('id','btn16'); 
inputp1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');


inputp2.setAttribute('style',"text-decoration: none; zoom:110%;");
inputp2.setAttribute('id',"btnp");

$('#btnp').append(inputp1);

buttoNS.appendChild(inputp2); // buttoNS
$("#info").prepend(buttoNS);

$('#btnp').click( function(e) {   
    e.preventDefault(); 
    //$('video').css('z-index',1001);
    

    if(parseInt($('.ytp-chrome-bottom').css('width'))<1200){    
            //$('#primary-inner>#player').appendTo('#overlay2');  
            

            $('.ytp-size-button.ytp-button').trigger('click');  
            
            $('.ytp-size-button.ytp-button').trigger('click');  

            setTimeout(function(){
            $('#btnp').trigger('click');
            },2000);
            
    }else{  // large window
            $('.ytp-size-button.ytp-button').trigger('click');  
            

            $('#player-theater-container').css('height','auto');
            $('#player-theater-container').css('width','auto');
            
    }

    //$('#masthead >#container').hide();
    $('#masthead').css('opacity',0.5);
    
    //$('#primary-inner>#player').remove();
    
    
    $('.html5-video-container').css('height',$('body').height());
    $('.html5-video-container').css('width',$('body').width());
    $('.html5-video-container>video').css('height',$('body').height());
    $('.html5-video-container>video').css('width',$('body').width());

    return false;
     } );


$('#btnp').append(inputp1);

buttoNS.appendChild(inputp2); // buttoNS
$("#info").prepend(buttoNS);


//========================================================================================  expand & collapse
var inputn1=document.createElement("paper-button"); 
var inputn2=document.createElement("a"); 

if(bar_hide==0){
    $('#btns').hide();
    $('#simple-box').hide();
        inputn1.innerHTML='⇲';inputn1.setAttribute('style','background-color: #eaedff ; height:0.5px; border: thin solid #5697ff; z-index:999'); // on/off 💬
    }else{
        inputn1.innerHTML='⇑　⇑　⇑'; inputn1.setAttribute('style','background-color: #eaedff ; height:0.5px; border: thin solid #5697ff; z-index:999');
        $('#btns').show();
        $('#simple-box').show();
    }




inputn1.setAttribute('id','btn14'); 
inputn1.setAttribute('class','style-scope.ytd-subscribe-button-renderer');
inputJ1.setAttribute('style','background-color: #5697ff');


inputn2.setAttribute('style',"text-decoration: none; zoom:90%;");
inputn2.setAttribute('id',"btnn");


$('#btnn').append(inputn1);

buttoNS2.appendChild(inputn2); // buttoNS
$("#info").append(buttoNS2);

$('#btnn').click( function(e) {
    e.preventDefault(); 

    bar_hide = (bar_hide+1)%2; 
    
    chrome.storage.sync.set({bar_hide:bar_hide});

if(bar_hide==0){
        $('#btns').hide();
        $('#simple-box').hide();
    
        inputn1.innerHTML='⇲';inputn1.setAttribute('style','background-color: #eaedff ; height:10px; height:0.5px; border: thin solid #5697ff'); // on/off 💬
    }else{
        inputn1.innerHTML='⇑　⇑　⇑'; inputn1.setAttribute('style','background-color: #eaedff ; height:10px; height:0.5px; border: thin solid #5697ff');
        $('#btns').show();
        $('#simple-box').show();
    }

    return false;

     } );


$('#btnn').append(inputn1);

buttoNS2.appendChild(inputn2); // buttoNS
$("#info").prepend(buttoNS2);



//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    
    //$( "#contenteditable-textarea").on( "click",function() { $("#contenteditable-textarea").html(
      //'                         '+$('#time').html());});
    
    $( "#contenteditable-root").on( "click",function() { $("#contenteditable-root").text(
      '                         '+$('#time').text());});

    $("#contenteditable-root").attr('aria-label','Click again to leave comment at current time.');
    

    $(document).keyup(function(e) {
  	if (e.which === 37  || e.which === 39 ){

  		    playtime = $('.ytp-time-current').html();
    		if(playtime.split(':').length>2){

      			playtime = parseInt(playtime.split(':')[0])*60*60+parseInt(playtime.split(':')[1])*60+parseInt(playtime.split(':')[2]);
    		}else{
      
      		playtime = parseInt(playtime.split(':')[0])*60+parseInt(playtime.split(':')[1]);
    		}
    		time = playtime;   

  	}});

    $( ".ytp-progress-bar-padding , video, .ytp-chrome-controls" ).on( "mouseenter mouseleave mouseover click keypress",function() { //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
   
    playtime = $('.ytp-time-current').html();
   
    if(playtime.split(':').length>2){

      playtime = parseInt(playtime.split(':')[0])*60*60+parseInt(playtime.split(':')[1])*60+parseInt(playtime.split(':')[2]);
    }else{
      
      playtime = parseInt(playtime.split(':')[0])*60+parseInt(playtime.split(':')[1]);
    }

    

    time = playtime;


    
    });


    
    if (!(typeof myVar === "undefined")){
    clearInterval(myVar);   
    }

    if (!(typeof excome === "undefined")){
    clearInterval(excome);   
    }    

    if (single_line==0){
    myVar = setInterval(  function(){addComment(color,rand_color);},  3300); 
    }
    
    excome = setInterval(  function(){
        
     
    

      if(tcome.length && iconop==1){
        for(var i=0;i<tcome.length;i++){

            var t = tcome[i].split('</a>')[0].split('">')[tcome[i].split('</a>')[0].split('">').length-1];

            if(t.split(':').length==3){
                
            if(time +2== parseInt(parseInt(t.split(':')[0])*60*60 + parseInt(t.split(':')[1])*60+parseInt(t.split(':')[2]))){
                
                extraComment(color,rand_color,tcome[i]);
                
            }
                }
            if(t.split(':').length==2){
                    
                    if(time +2== parseInt(parseInt(t.split(':')[0])*60+  parseInt(t.split(':')[1]) )){
                
                
                extraComment(color,rand_color,tcome[i]);

                }
            }

        }
      }
    }, 1000);



});  





var div=document.createElement("div"); 


setTimeout(function(){
waitForElement("#info",function(){

    var flame = document.querySelector("#movie_player");
    flame.style = "overflow: hidden; width: 100%; position: relative; z-index: 1;"

    //000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    //========================================================================================   COLOR change



});
},1000);


waitForElement(".html5-video-container",function(){

        $(".html5-video-container").attr('style','z-index:1');
        //var size = 34;
        var height = $("video").height() ;

        window.size = Math.floor(height/13); 
        
});

var lem2 = 0;

}

}).call(this);