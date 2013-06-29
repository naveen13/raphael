$(document).ready(function(){  
    (function($){
    	var $ele = $('#paper');
    	var width = $ele.width();
    	var height = $ele.height();
	    var paper = new Raphael($ele[0], width, height);
	    pap = paper;
	    var r = -1; var c = 0;
    	var w = 100;
    	var h = 30;
    	var brick = { "fill": "#934B2A", "stroke": "#FF9455", "stroke-width": "1", "stroke-linejoin": "round" };
       	var brickPiece = { "gradient": "90-#FF9455-#934B2A", "stroke-width": "0", "stroke-linejoin": "round" };
       	//generate 50 bricks
	    for(var i = 0; i <= 50; i+=1) {
	    	if((++r + 1) * w > width ){ width = r * w + 1; c++; r = 0; $ele.width(width); }
	        paper.rect(r * w, c * h, w, h).attr(brick).click(function (){
				this.hide();
				var nx = this.attrs.x;
				var ny = this.attrs.y;
				var nr = -1;
				var nw = w /10;
				var nh = h / 10;
				//generate 100 pieces on click
				for(var j = 0; j < 100; j++){
					if(++nr >= 10){ ny += nh; nr = 0;}
	            	var trans = new Object();
	            	var nnx = nx + nr * nw;
	            	var nny = ny - (1 * ny);
	            	trans = { x: nnx - (5 - nr) * j, y: nny};
	            	var anim1 = Raphael.animation({ x: nnx + nr * nw, y: height - nh}, 4e3, "bounce", function(){ this.hide(); });
	            	var anim0 = Raphael.animation(trans, 4e2, function(){this.animate(anim1);});
	            	paper.rect(nx + nr * nw, ny , nw, nh).attr(brickPiece).animate(anim0);
				}
	         });
	    }
	    
	    var rectangle = paper.rect(0, height, width / 5, height / 20).attr(brick);
	    var rt = "...t0-" + (height / 20).toString();
	    rectangle.transform(rt);
	    /*var ellipse = paper.circle(200, 400, 20, 20);
	    */var dribbble = "M16,1.667C8.084,1.667,1.667,8.084,1.667,16S8.084,30.333,16,30.333S30.333,23.916,30.333,16S23.916,1.667,16,1.667zM25.534,8.232c1.7,2.084,2.731,4.732,2.767,7.618c-3.232-0.656-6.14-0.783-8.777-0.38c-0.362-0.825-0.738-1.631-1.125-2.412C22.43,11.542,24.497,9.781,25.534,8.232zM23.955,6.624c-0.877,1.658-3.191,3.232-6.564,4.476c-1.533-2.86-3.115-5.299-4.388-7.033c0.96-0.241,1.964-0.37,2.997-0.37C19.031,3.696,21.809,4.8,23.955,6.624zM10.846,4.831c1.09,1.441,2.751,3.91,4.415,6.967c-3.687,1.073-8.032,1.677-11.282,1.585C4.806,9.581,7.395,6.431,10.846,4.831zM3.696,16c0-0.147,0.006-0.293,0.011-0.439c0.312,0.013,0.632,0.019,0.96,0.019c3.464,0,7.754-0.646,11.484-1.765c0.048-0.015,0.093-0.029,0.14-0.044c0.354,0.704,0.697,1.431,1.033,2.175c-0.516,0.146-1.022,0.314-1.518,0.507c-3.547,1.375-6.512,3.895-9.031,7.678C4.861,21.96,3.696,19.114,3.696,16zM8.388,25.656c2.31-3.574,5.002-5.924,8.209-7.167c0.516-0.2,1.049-0.369,1.594-0.513c1.205,2.996,2.166,6.205,2.559,9.373c-1.462,0.613-3.066,0.953-4.749,0.953C13.128,28.305,10.484,27.312,8.388,25.656zM22.802,26.246c-0.446-2.939-1.321-5.895-2.413-8.686c2.316-0.279,4.881-0.117,7.742,0.485C27.557,21.46,25.574,24.398,22.802,26.246z";
	    paper.path(dribbble).attr({
	    	fill: "#333",
	    	"stroke": "#aaa",
            "stroke-width": "1",
            "stroke-linejoin": "round"
	    	});
	    	
    	$(document).keydown(function(e) {
    		if(e.keyCode == 37 || e.keyCode == 39){
    			e.preventDefault();
    			var dim = rectangle.getBBox(false);
    			if(e.keyCode == 37 && dim.x >= 30 ) rectangle.transform("...t-30,0");
    			else if(e.keyCode == 39 && dim.x2 <= width - 30) rectangle.transform("...t30,0");
    		}
		});/*
    	$ele.mousemove(function(e){
    		rectangle.animate(Raphael.animation({x: e.clientX}, 1e2));
		});*/
	})($);
});
var pap;