var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var SETTING = (function(_super) {
	function SETTING() {
		this.closeBtn;
        this.slider1;
        this.slider2;
        this.slider1_bg;
        this.slider2_bg;
		SETTING.__super.call(this);
		
	}

	Laya.class(SETTING, 'ui.test.SETTING', _super);
	var __proto__ = SETTING.prototype;

	__proto__.createChildren = function() {
		laya.ui.Component.prototype.createChildren.call(this);
		SETTING.uiView = createUiView();
		this.createView(SETTING.uiView); // 创建ui
	}

	function createUiView(){  // 加载显示的ui图数据
		var uiView = {
            "type": "View",
            "props": {
				"width": x*prixeRatio,
				"height": y*prixeRatio,
			},
            "child":[{
				"props": {
					"x":0,
					"y": 0,
					"skin": "setting/bg.png",
					"width":x*prixeRatio,
					"height": y*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":x*0.1*prixeRatio,
					"y": 40*prixeRatio,
					"skin": "setting/info_bg.png",
					"width":x*prixeRatio*0.8,
					"height": y*prixeRatio-80*prixeRatio,
					"sizeGrid": "30,18,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":x*0.3*prixeRatio,
					"y": 36*prixeRatio,
					"skin": "setting/t.png",
					"width":x*prixeRatio*0.4,
					"height":50*prixeRatio,
					"sizeGrid": "4,4,4,4",
                     "label":"设置",
                    "labelColors":"#000000",
                    "labelSize":18*prixeRatio,
                    "stateNum":1,
                    "labelPadding":"0,0,4,0",
				},
				"type": "Button"
			},{
				"props": {
					"x":x*0.72*prixeRatio,
					"y": 60*prixeRatio,
					"skin": "setting/close.png",
					"width":54*prixeRatio,
					"height":54*prixeRatio,
					"sizeGrid": "4,4,4,4",
                    "var":"closeBtn",
				},
				"type": "Image"
			},{
            "props": {
                "x":x*0.28*prixeRatio ,
                "y": y/2*prixeRatio - 12*prixeRatio ,
                "text": "音乐:",
                "fontSize": 14*prixeRatio,
                "height":24,
                "name": "label"
                },
                "type": "Label"
            }, {
                "props": {
                    "x":x*0.28*prixeRatio+14*prixeRatio*3,
					"y": y/2*prixeRatio - 10*prixeRatio,
                    "skin": "setting/bg_s.png",
                    "width": x*0.38*prixeRatio,
                    "height": 15*prixeRatio,
                    "sizeGrid": "4,4,4,4",
                    "name": "slider",
                },
                "type": "Image"
            },{
                "props": {
                    "x":x*0.28*prixeRatio+14*prixeRatio*3,
					"y": y/2*prixeRatio - 10*prixeRatio,
                    "skin": "setting/val.png",
                    "width": 0,
                    "height": 12*prixeRatio,
                    "sizeGrid": "4,4,4,4",
                    "name": "slider",
                    "var":"slider1_bg"
                },
                "type": "Image"
            },{
                "props": {
                    "x":x*0.28*prixeRatio-6*prixeRatio+14*prixeRatio*3,
					"y": y/2*prixeRatio-16*prixeRatio,
                    "skin": "setting/val$bar.png",
                    "width": 24*prixeRatio,
                    "height": 24*prixeRatio,
                    "sizeGrid": "4,4,4,4",
                    "name": "slider",
                    "var":"slider1"
                },
                "type": "Image"
            },{
            "props": {
                "x":x*0.28*prixeRatio ,
                "y": y/2*prixeRatio+30*prixeRatio - 2*prixeRatio ,
                "text": "音效:",
                "fontSize": 14*prixeRatio,
                "height":24,
                "name": "label"
            },
            "type": "Label"
            },{
                "props": {
                    "x":x*0.28*prixeRatio+14*prixeRatio*3,
					"y": y/2*prixeRatio+30*prixeRatio,
                    "skin": "setting/bg_s.png",
                    "width": x*0.38*prixeRatio,
                    "height": 15*prixeRatio,
                    "sizeGrid": "4,4,4,4",
                    "name": "slider",
                },
                "type": "Image"
            },{
                "props": {
                    "x":x*0.28*prixeRatio+14*prixeRatio*3,
					"y": y/2*prixeRatio+30*prixeRatio,
                    "skin": "setting/val.png",
                    "width": 0,
                    "height": 12*prixeRatio,
                    "sizeGrid": "4,4,4,4",
                    "name": "slider",
                    "var":"slider2_bg"
                },
                "type": "Image"
            },{
                "props": {
                    "x":x*0.28*prixeRatio-6*prixeRatio+14*prixeRatio*3,
					"y": y/2*prixeRatio+24*prixeRatio,
                    "skin": "setting/val$bar.png",
                    "width": 24*prixeRatio,
                    "height": 24*prixeRatio,
                    "sizeGrid": "4,4,4,4",
                    "name": "slider",
                    "var":"slider2"
                },
                "type": "Image"
            },
            
            ],
        };




		return uiView;
	}
    
	
	return SETTING;
})(View)