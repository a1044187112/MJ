var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var Indexbg = (function(_super) {
	function Indexbg() {
		this.jlist;

		Indexbg.__super.call(this);
		
	}

	Laya.class(Indexbg, 'ui.test.Indexbg', _super);
	var __proto__ = Indexbg.prototype;

	__proto__.createChildren = function() {
		laya.ui.Component.prototype.createChildren.call(this);
		Indexbg.uiView = createUiView();
		this.createView(Indexbg.uiView); // 创建ui
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
					"skin": "index/bg.png",
					"width":  x*prixeRatio,
					"height":y*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x": (x*prixeRatio - 118*prixeRatio)/2,
					"y": y*prixeRatio - 212*prixeRatio-40*prixeRatio,
					"skin": "index/mj.png",
                    "clipX":6,
                    "clipY":4,
                    "index":1,
					"width":150*prixeRatio,
					"height":212*prixeRatio,
					"sizeGrid": "4,4,4,4",
					"var": "mjlist",
				},
				"type": "Clip"
			}
            
            ],
        };
		
		return uiView;
	}
	
	return Indexbg;
})(View)