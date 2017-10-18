function add(){
	     var M=parseFloat(document.getElementById("M").value);
         var h=parseFloat(document.getElementById("h").value);
         var b=parseFloat(document.getElementById("b").value);	
	     var fck=parseFloat(document.getElementById("concreteStr").value);
	     var fy=parseFloat(document.getElementById("steelStr").value);
	     var e=document.getElementById("environment").value;
		 var row=0;
		 for(i=0;i<document.getElementsByName("rowOfSteel").length;i++)   
         {   
            if(document.getElementsByName("rowOfSteel")[i].checked)
            {row=document.getElementsByName("rowOfSteel")[i].value;}
         } 
	   
	     var c=0;                  //保护层厚度
	     if(e<5){c=15+5*e;}
	     else{c=40;}
		 if(fck<17){c=c+5;}       //混凝土强度等级不大于C25时，保护层厚度增加5mm
		 else{c=c;}
		 
	     var as=0;               //纵向受拉钢筋合力点到截面受拉边缘的距离
		 if(row=1){as=c+20;}     //c+8+25/2
         else{as=c+45;}		     //c+8+25+25/2
		 
		 var h0=h-as;            //截面有效高度
		 var aphas=M*1000000/(1*fck*b*Math.pow(h0,2));   //截面抵抗矩系数
		 var kex=1-Math.pow(1-2*aphas,1/2);  
         var gamas=(1+Math.pow(1-2*aphas,1/2))/2;	
		 
		 var As=M*1000000/(fy*h0*gamas);
		
	     document.getElementById("result").value=As.toFixed(2);
	   }