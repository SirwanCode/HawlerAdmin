window.addEventListener('load', function() {
      sidebar=this.document.querySelector('#sidebar .sidebar-content');
      hamberger=this.document.getElementById('hamberger');

    hamberger.innerHTML=sidebar.innerHTML;
    hamberger.removeChild(hamberger.querySelector('#hamberger .sidebarCompany'));

});




elementRW=document.querySelector('#menurow #menurow-cR').getBoundingClientRect().width;
elementLW=document.querySelector('#contentrow #contentrow-cL').getBoundingClientRect().width;


function showhideSidebar(){
     menuR=  document.querySelector('#menurow');  
     menuCR= document.querySelector('#menurow #menurow-cR');  
     menuCL= document.querySelector('#menurow #menurow-cL');  

     contentR=document.querySelector('#contentrow');  
     contentCR=document.querySelector('#contentrow #contentrow-cR');  
     contentCL=document.querySelector('#contentrow #contentrow-cL'); 
     
     sidebarItem=this.document.querySelector('#sidebar');
     step=40;
     delay=5;
    
     if (sidebarItem.style.getPropertyValue('width')=="0px" ){

        chsize=setInterval(function(){

          
            wd=menuCR.getBoundingClientRect().width+step;
            menuCR.style.setProperty('width', wd+'px','important');
            wd=menuCL.getBoundingClientRect().width-step;
            menuCL.style.setProperty('width', wd+'px','important');

            wd=contentCR.getBoundingClientRect().width+step;
            contentCR.style.setProperty('width', wd+'px','important');
            wd=contentCL.getBoundingClientRect().width-step;
            contentCL.style.setProperty('width', wd+'px','important');

            wd=sidebarItem.getBoundingClientRect().width+step;
            sidebarItem.style.setProperty('width', wd+'px','important');

            if (wd>=elementRW){
                clearInterval(chsize);

                menuCR.style.setProperty('width',elementRW+ 'px','important');
                menuCL.style.setProperty('width', elementLW+'px','important');
                contentCR.style.setProperty('width', elementRW+'px','important');
                contentCL.style.setProperty('width',elementLW+'px','important');
                sidebarItem.style.setProperty('width', elementRW+'px','important');
            }

        },delay);
        
     }else{
        
        chsize=setInterval(function(){

          
            wd=menuCR.getBoundingClientRect().width-step;
            menuCR.style.setProperty('width', wd+'px','important');
            wd=menuCL.getBoundingClientRect().width+step;
            menuCL.style.setProperty('width', wd+'px','important');

            wd=contentCR.getBoundingClientRect().width-step;
            contentCR.style.setProperty('width', wd+'px','important');
            wd=contentCL.getBoundingClientRect().width+step;
            contentCL.style.setProperty('width', wd+'px','important');

            wd=sidebarItem.getBoundingClientRect().width-step;
            sidebarItem.style.setProperty('width', wd+'px','important');

            if (wd<=step){
                clearInterval(chsize);

                menuCR.style.setProperty('width', '0px','important');
                menuCL.style.setProperty('width', window.innerWidth+'px','important');
                contentCR.style.setProperty('width', '0px','important');
                contentCL.style.setProperty('width', window.innerWidth+'px','important');
                sidebarItem.style.setProperty('width', '0px','important');
            }

        },delay);

     }
     

}


function ssShowToggle(){
    settingSidebar=document.querySelector('#settingSidebar');
    ssShow=document.querySelector('#ssShow');
    if(settingSidebar.getBoundingClientRect().width==0){
        settingSidebar.style.setProperty('width', 'var(--settingsidebarWidth)','important');
        ssShow.style.setProperty('left', 'calc(var(--settingsidebarWidth) - 20px)','important');
        
    }else{
        settingSidebar.style.setProperty('width', '0px','important');
        ssShow.style.setProperty('left', '2px','important');
    }
}


const navbarColorItems = document.querySelectorAll('#navbarColors li');

navbarColorItems.forEach((li, index) => {
  li.addEventListener('click', function() {
    navbar=document.querySelector('#menurow-cL nav');
    const styles = window.getComputedStyle(this);
    const bgColor = styles.getPropertyValue('background-color');
    navbar.style.setProperty('background-color', bgColor ,'important');
  });
});

const DashboardColorItems = document.querySelectorAll('#DashboardColors li');
DashboardColorItems.forEach((li, index) => {
    li.addEventListener('click', function() {
      sidebar=document.querySelector('#sidebar');
      const styles = window.getComputedStyle(this);
      const bgColor = styles.getPropertyValue('background-color');
      sidebar.style.setProperty('background-color', bgColor ,'important');
       
      sidebarFooter=document.querySelector('#sidebar .sidebar-footer');
      sidebarFooter.style.setProperty('background-color', bgColor ,'important');
      sidebarFooter.style.setProperty('filter', 'brightness(0.7)' ,'important');


    });
  });
  
  const BreadcrumbColorItems = document.querySelectorAll('#BreadcrumbColors li');
  BreadcrumbColorItems[0].style.setProperty('background-color', 'beige' ,'important');
  BreadcrumbColorItems[1].style.setProperty('background-color', 'cadetblue' ,'important');
  BreadcrumbColorItems[2].style.setProperty('background-color', 'burlywood' ,'important');
  BreadcrumbColorItems[3].style.setProperty('background-color', 'antiquewhite' ,'important');
  BreadcrumbColorItems[4].style.setProperty('background-color', '#f0f0f0' ,'important');
  BreadcrumbColorItems.forEach((li, index) => {
    li.addEventListener('click', function() {
      contetnBreadcrumb=document.querySelector('#contetnBreadcrumb');
      const styles = window.getComputedStyle(this);
      const bgColor = styles.getPropertyValue('background-color');
      contetnBreadcrumb.style.setProperty('background-color', bgColor ,'important');
 
    });
  });

  const MainContentColorItems = document.querySelectorAll('#MainContentColors li');
  MainContentColorItems[0].style.setProperty('background-color', 'darkorange' ,'important');
  MainContentColorItems[1].style.setProperty('background-color', 'darkred' ,'important');
  MainContentColorItems[2].style.setProperty('background-color', 'darkslateblue' ,'important');
  MainContentColorItems[3].style.setProperty('background-color', 'slategray' ,'important');
  MainContentColorItems[4].style.setProperty('background-color', 'whitesmoke' ,'important');
  MainContentColorItems.forEach((li, index) => {
    li.addEventListener('click', function() {
      MainContent=document.querySelector('#contentrow-cL');
      const styles = window.getComputedStyle(this);
      const bgColor = styles.getPropertyValue('background-color');
      MainContent.style.setProperty('background-color', bgColor ,'important');
 
    });
  });











