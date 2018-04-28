var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var Tween =  laya.utils.Tween;
var Ease = laya.utils.Ease;

var INIT = {
    
    data : function(){
        x = laya.utils.Browser.clientHeight;
        y = laya.utils.Browser.clientWidth;
        prixeRatio = Laya.Browser.pixelRatio;
        cardImgList = [];
    },
    
    


    init : function(){
        INIT.data();
    //初始化舞台
    Laya.init(x*prixeRatio, y*prixeRatio);

    _SELF = this;

    //设置适配模式
    Laya.stage.scaleMode = "fixedheight";
    //让舞台处于屏幕的垂直居中
    Laya.stage.alignH = "center";
    //保持原始高宽比的情况下，将舞台铺满屏幕，超出比例的部分会有黑边
    Laya.stage.scaleMode = "showall";
    //自动横屏，游戏的水平方向始终与浏览器屏幕较短边保持垂直
    Laya.stage.screenMode = "horizontal";
    //设置舞台背景色
    Laya.stage.bgColor = "#232628";

    INIT.loop(); // 循环函数

},

    loop : function (){
        // var imgList = InitImgElement.init(); // 加载图片数据 

        INIT.loadbg();
		 
    },

    loadbg : function(){
       
        beginLoad();
        function beginLoad(){
            //设置progress Handler的第4个参数为true，根据加载文件个数获取加载进度
            Laya.loader.load('res/sound/bgm.mp3',null,Laya.Handler.create(this,this.onProgress,null,true));
            laya.media.SoundManager.playMusic("res/sound/bgm.mp3",0);   //0表示循环播放
            Laya.loader.load("res/atlas/index.atlas", Handler.create(null, onLoaded));
        }

        function onLoaded(){
            var ui = null;  //每次中心加载创建对象
            ui = new Indexbg();
            Laya.stage.addChild(ui);  //加载ui
			INIT.loadIndex();  // 加載INDEX
			// var i = 0; 
			// setInterval(function(){
			// 	i++;
			// 	ui.mjlist.index = (i%21);
			// },170);
			
        }
    },

	loadIndex : function(){
        beginLoad();
        function beginLoad(){
            Laya.loader.load("res/atlas/index_icon.atlas", Handler.create(null, onLoaded));
        }

        function onLoaded(){
            var ui = null;  //每次中心加载创建对象
            ui = new INDEX();
            Laya.stage.addChild(ui);  //加载ui	
            indexEvent.init(ui);  // 事件处理
			
        }
    },



}

INIT.init();





