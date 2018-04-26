var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var INDEX = (function(_super) {
	function INDEX() {
		this.jlist;
        this.button0;
        this.button1;
        this.button2;
        this.button3;
		this.icon5;
		INDEX.__super.call(this);
		
	}

	Laya.class(INDEX, 'ui.test.INDEX', _super);
	var __proto__ = INDEX.prototype;

	__proto__.createChildren = function() {
		laya.ui.Component.prototype.createChildren.call(this);
		INDEX.uiView = createUiView();
		this.createView(INDEX.uiView); // 创建ui
	}

	function createUiView(){  // 加载显示的ui图数据

		var uiView = {
            "type": "View",
            "props": {
				"width": x*prixeRatio,
				"height": y*prixeRatio
			},
            "child":[{
				"props": {
					"x": 0,
					"y": 0,
					"skin": "index/top.png",
					"width":  x*prixeRatio,
					"height":50*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x": 0,
					"y": y*prixeRatio - 30*prixeRatio,
					"skin": "index/footer.png",
					"width": x*prixeRatio,
					"height":40*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x": 15*prixeRatio,
					"y": 60*prixeRatio,
					"skin": "index/anno.png",
					"width": x*prixeRatio/3.5,
					"height":y*prixeRatio/1.5,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":x*prixeRatio*0.2,
					"y": 7*prixeRatio,
					"skin": "index/icon9.png",
					"width": 30*prixeRatio,
					"height":30*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},

            
            ],
        };
		var iconList = setIconCoordinate();  // 顶部小图标
        uiView.child = uiView.child.concat(iconList);
        var buttonList  = setButtonCoordinate();// 按钮
         uiView.child = uiView.child.concat(buttonList);
		return uiView;
	}

    function setIconCoordinate(){
        var data = [];
        for(let i = 0; i < 6 ; i ++){
            let dataL = {
				"props": {
					"x":x*prixeRatio - x*prixeRatio*0.365 + i*35*prixeRatio,
					"y": 7*prixeRatio,
					"skin": "index/icon"+(i+1)+".png",
					"width": 30*prixeRatio,
					"height":30*prixeRatio,
					"sizeGrid": "4,4,4,4",
					"var":"icon"+i
				},
				"type": "Image"
			};
             data.push(dataL);    
        }
        return data;
    }

    function setButtonCoordinate(){
        var data = [];
        var imgSrc = ["index/icon7.png","index/icon11.png","index/icon13.png","index/icon12.png"];
        for( let i = 0 ; i < imgSrc.length ; i++ ){
            let buttonBg = { // 按钮背景图
                "props": {
                    "x": x*prixeRatio - x*prixeRatio*0.28,
                    "y": 60*prixeRatio + 65*i*prixeRatio,
                    "skin": "index/icon8.png",
                    "clipY":3,
                    "index":2,
                    "width":128*prixeRatio,
                    "height":54*prixeRatio,
                    "sizeGrid": "4,4,4,4",
                    "var": "button"+i,
                },
                "type": "Clip"
			};
            data.push(buttonBg);
            let dataL = {
				"props": {
					"x": x*prixeRatio - x*prixeRatio*0.28,
					"y":  60*prixeRatio + 65*i*prixeRatio - 2*prixeRatio,
					"skin": imgSrc[i],
					"width": 128*prixeRatio,
					"height":54*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			};
            data.push(dataL);
        }
        return data;
    }
	
	return INDEX;
})(View)