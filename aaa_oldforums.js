//  RESERVED FOR FUTURE USE

// Every html page in the archive fileset loads
//          <script src="../oldforums.js"></script></body>
// You can utilize this toward customizing your copy of the archive.

//    bound to onclick event (css class="codebox")
function selectCode(a) {
    'use strict';
    var e=a.parentNode.parentNode.getElementsByTagName('CODE')[0];
    var s,r;
    if(window.getSelection) {
        s=window.getSelection();
        if(s.setBaseAndExtent) {
            var l=(e.innerText.length>1)?e.innerText.length- 1:1;
            try{
                s.setBaseAndExtent(e,0,e,l);
            }
            catch(error) {
                r=document.createRange();
                r.selectNodeContents(e);
                s.removeAllRanges();
                s.addRange(r);
            }
        }
        else {
            if(window.opera&&e.innerHTML.substring(e.innerHTML.length- 4)==='<BR>') {
                e.innerHTML=e.innerHTML+'&nbsp;';
            }
            r=document.createRange();
            r.selectNodeContents(e);
            s.removeAllRanges();
            s.addRange(r);
        }
    }
    else if(document.getSelection){
        s=document.getSelection();
        r=document.createRange();
        r.selectNodeContents(e);
        s.removeAllRanges();
        s.addRange(r);
    }
    else if(document.selection) {
        r=document.body.createTextRange();
        r.moveToElementText(e);
        r.select();
    }
}

