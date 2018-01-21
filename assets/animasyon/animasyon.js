(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animasyon_atlas_P_", frames: [[1500,568,341,126],[730,524,768,189],[1132,715,755,184],[0,484,728,316],[0,0,705,482],[730,262,564,260],[707,0,564,260],[0,802,564,260],[566,802,564,260],[1273,0,564,260],[1843,568,50,50],[1843,620,40,40],[1500,262,400,304],[1534,901,400,304],[402,1064,400,304],[1132,901,400,304],[0,1064,400,304]]}
];


// symbols:



(lib.Path = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.analiz1 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.analiz2 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.analiz3 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.analiz4 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.foto_hareket_0 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.foto_hareket_0000_1 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.foto_hareket_0001_2 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.foto_hareket_0002_3 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.foto_hareket_0003_Foto = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sağgöz = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.solgöz = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ucankus_1 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ucankus_2 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ucankus_3 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ucankus_4 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ucankus_5 = function() {
	this.spriteSheet = ss["animasyon_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.foto_hareket_0003_Foto();
	this.instance.parent = this;
	this.instance.setTransform(-282,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-282,-130,564,260), null);


(lib.kapalıgöz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E81F6D").s().p("AgpAqQgRgSAAgYQAAgYARgRQARgRAYAAQAYAAASARQARARAAAYQAAAYgRASQgSARgYAAQgYAAgRgRg");
	this.shape.setTransform(5.9,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,11.8);


(lib.foto_analiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// flash0.ai
	this.instance = new lib.analiz1();
	this.instance.parent = this;
	this.instance.setTransform(-49,-125.9);

	this.instance_1 = new lib.analiz2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-52.4,-62.6);

	this.instance_2 = new lib.analiz3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51,-57.2);

	this.instance_3 = new lib.analiz4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-57.2,-55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-125.9,768,189);


(lib.solgoz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E81F6D").s().p("AjXAtQAWhbBPgxQBQgyBbAVQA7AOAsApQArAoASA3Qg+gBguADQg4AEg4ANQh+AehdA5QgHgrAKgsg");
	this.shape.setTransform(5.3,3.1,0.196,0.196,10.4);

	this.instance = new lib.kapalıgöz("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.1,5.1,0.77,0.77,0,0,0,6,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.instance_1 = new lib.solgöz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.253,0.253);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.1,10.1);


(lib.sağgöz_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// flash0.ai
	this.instance = new lib.foto_analiz();
	this.instance.parent = this;
	this.instance.setTransform(73.7,14.8,0.202,0.184,2.2,0,0,265.4,34.4);
	this.instance.alpha = 0.898;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.foto_analiz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.2,13.7,0.246,0.228,0,0,0,264.9,34);
	this.instance_1.alpha = 0.898;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},8).wait(1));

	// kapak
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E81F6D").s().p("AjXAtQAWhbBPgxQBQgyBbAVQA7AOAsApQArAoASA3QiNAYhQAQQgvAJg6ATIhxAmQgHgrAKgsg");
	this.shape.setTransform(6.6,3.8,0.261,0.261,11.5);

	this.instance_2 = new lib.kapalıgöz("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.3,6.3,1,1,0,0,0,5.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(3));

	// göz
	this.instance_3 = new lib.sağgöz();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.7,12.7);


(lib.foto_hareket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(4));

	// Layer_1
	this.instance = new lib.foto_hareket_0();
	this.instance.parent = this;
	this.instance.setTransform(417.3,-130.5);

	this.instance_1 = new lib.foto_hareket_0000_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.8,-128.7);

	this.instance_2 = new lib.foto_hareket_0001_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-277,-130);

	this.instance_3 = new lib.foto_hareket_0002_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-211,-130);

	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(47,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:417.3,y:-130.5}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.movieClip_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance,p:{x:-733.1,y:-129.1}}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235,-130.5,1216.3,260.6);


(lib.ucankus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sağ göz
	this.saggoz = new lib.sağgöz_1();
	this.saggoz.name = "saggoz";
	this.saggoz.parent = this;
	this.saggoz.setTransform(-117.2,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.saggoz).wait(1).to({regX:88.4,regY:40.2,x:-28.6,y:-67.2},0).wait(1).to({x:-28.7,y:-66.5},0).wait(1).to({x:-27.9,y:-66},0).wait(1).to({x:-27.8,y:-66.4},0).wait(1));

	// sol göz
	this.solgoz = new lib.solgoz();
	this.solgoz.name = "solgoz";
	this.solgoz.parent = this;
	this.solgoz.setTransform(-98.3,-101,1,1,0,0,0,5,5);

	this.timeline.addTween(cjs.Tween.get(this.solgoz).to({x:-97.5,y:-100.6},1).to({x:-98,y:-100.5},1).to({x:-97.4,y:-99.9},1).to({x:-97.2,y:-100.1},1).wait(1));

	// kuş
	this.instance = new lib.ucankus_1();
	this.instance.parent = this;
	this.instance.setTransform(-164,-126,0.228,0.228);

	this.instance_1 = new lib.ucankus_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-164,-126,0.228,0.228);

	this.instance_2 = new lib.ucankus_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-164,-126,0.228,0.228);

	this.instance_3 = new lib.ucankus_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-164,-126,0.228,0.228);

	this.instance_4 = new lib.ucankus_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-164,-126,0.228,0.228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-126,91.1,69.2);


(lib.kusdikey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ucankus = new lib.ucankus();
	this.ucankus.name = "ucankus";
	this.ucankus.parent = this;
	this.ucankus.setTransform(0,-0.5,1,1,0,0,0,-117.4,-113);

	this.timeline.addTween(cjs.Tween.get(this.ucankus).wait(1).to({regX:-48.2,regY:-66.8,x:69.1,y:46.1},0).wait(1).to({y:43.3},0).wait(1).to({y:40.2},0).wait(1).to({y:44.8},0).wait(1));

	// golge
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-53.8,74.9,0.208,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-14.3,98.2,114.4);


(lib.fotolar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// Layer_1
	this.foto1_gel = new lib.foto_hareket();
	this.foto1_gel.name = "foto1_gel";
	this.foto1_gel.parent = this;
	this.foto1_gel.setTransform(-160.8,112.8,1.099,1.099,11);
	this.foto1_gel._off = true;

	this.timeline.addTween(cjs.Tween.get(this.foto1_gel).wait(29).to({_off:false},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ucankushareketli = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.kusYukariasagi = new lib.kusdikey();
	this.kusYukariasagi.name = "kusYukariasagi";
	this.kusYukariasagi.parent = this;
	this.kusYukariasagi.setTransform(196,178.4,3,3);

	this.timeline.addTween(cjs.Tween.get(this.kusYukariasagi).wait(1).to({regX:65.5,regY:43.2,x:395.1,y:308},0).wait(1).to({x:397.8},0).wait(1).to({x:400.6},0).wait(1).to({x:403.3},0).wait(1).to({x:405.8},0).wait(1).to({x:403.1},0).wait(1).to({x:400.1},0).wait(1).to({x:396.9},0).wait(1).to({x:393.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36,135.3,294.6,343.1);


// stage content:
(lib.anaanimasyon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
		
		this.kusSagsol.kusYukariasagi.ucankus.saggoz.play();
		
		this.kusSagsol.kusYukariasagi.ucankus.solgoz.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// baykus
	this.kusSagsol = new lib.ucankushareketli();
	this.kusSagsol.name = "kusSagsol";
	this.kusSagsol.parent = this;
	this.kusSagsol.setTransform(262.7,80.3,1,1,0,0,0,200,180);

	this.timeline.addTween(cjs.Tween.get(this.kusSagsol).wait(39));

	// foto animasyon
	this.Foto_gel = new lib.fotolar();
	this.Foto_gel.name = "Foto_gel";
	this.Foto_gel.parent = this;
	this.Foto_gel.setTransform(675.3,93.5);

	this.timeline.addTween(cjs.Tween.get(this.Foto_gel).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(598.7,335.6,294.6,343.1);
// library properties:
lib.properties = {
	id: 'A87C966A2C303643913AC46FE87E0ADA',
	width: 1000,
	height: 600,
	fps: 12,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/animasyon_atlas_P_.png", id:"animasyon_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A87C966A2C303643913AC46FE87E0ADA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;