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

        selfCardList = [   // 自己牌数组
            {"id":1,"selected":false},
            {"id":2,"selected":true},
            {"id":3,"selected":false},
            {"id":4,"selected":false},
            {"id":5,"selected":false},
            {"id":6,"selected":false},
            {"id":7,"selected":true},
            {"id":8,"selected":true},
            {"id":9,"selected":false},
            {"id":10,"selected":true},
            {"id":11,"selected":false},
            {"id":12,"selected":true},
            {"id":13,"selected":false},
            {"id":14,"selected":false},
            {"id":15,"selected":false},
            {"id":16,"selected":false},
            {"id":17,"selected":false},
            {"id":18,"selected":false},
            {"id":19,"selected":false},
            {"id":20,"selected":false},
        ];
        playerHidCardArr = [1,2,3,4,5,6];
        INIT.loadbg();
		 
    },

    loadbg : function(){
       
        beginLoad();
        function beginLoad(){
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





