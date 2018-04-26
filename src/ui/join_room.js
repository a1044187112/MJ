var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var JOINROOM = (function(_super) {
	function JOINROOM() {
		this.JOINROOMButton;
        this.roomIdInput;
		JOINROOM.__super.call(this);
		
	}

	Laya.class(JOINROOM, 'ui.test.JOINROOM', _super);
	var __proto__ = JOINROOM.prototype;

	__proto__.createChildren = function() {
		laya.ui.Component.prototype.createChildren.call(this);
		JOINROOM.uiView = createUiView();
		this.createView(JOINROOM.uiView); // 创建ui
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
					"skin": "join_room/bg.png",
					"width":x*prixeRatio,
					"height": y*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":parseInt(x*prixeRatio*0.1),
					"y": 20*prixeRatio,
					"skin": "join_room/icon3.png",
					"width": x*prixeRatio*0.8,
					"height":y*prixeRatio - 40*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":parseInt(x*prixeRatio*0.1) ,
					"y": 0*prixeRatio,
					"skin": "join_room/icon2.png",
					"width":54*prixeRatio,
					"height":y*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":parseInt(x*prixeRatio - x*prixeRatio*0.1) - 28*prixeRatio ,
					"y": 0*prixeRatio,
					"skin": "join_room/icon2.png",
					"width": 54*prixeRatio,
					"height":y*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
                "props": {
                    "x":x*prixeRatio*0.3,
                    "y": 45*prixeRatio,
                    "skin": "join_room/input.png",
                    "text": "请输入房间号...",
                    "width": x*prixeRatio*0.4,
                    "height":42*prixeRatio,
                    "name": "input",
                    "maxChars":6,
                    "editable":false,
                    "fontSize":18*prixeRatio,
                    "color":"#ffffff",
                   "padding":"0,0,0,100",
                   "letterSpacing":"10",
                   "var":"roomIdInput",  
                },
                "type": "TextInput"
            }
            
            ],
        };

        uiView.child = uiView.child.concat(createBtnBgUI());


		return uiView;
	}

    function createBtnBgUI(){
        var imgList = [["1.png","2.png","3.png"],["4.png","5.png","6.png"],["7.png","8.png","9.png"],["clear.png","0.png","delete.png"]];
        var imgVal = [["1","2","3"],["4","5","6"],["7","8","9"],["清空","0","删除"]];
        let data = [];
        for(let i =0 ; i < 4 ; i++){
            for(let j = 0 ; j < 3 ; j++){
                let dataL = {
                    "props": {
                        "x":x*prixeRatio*0.22 + j*x*prixeRatio*0.20,
                        "y": 100*prixeRatio +  y/7.272*prixeRatio*i,
                        "skin": "join_room/btn.png",
                        "width": x*prixeRatio*0.18,
                        "height":y/8*prixeRatio,
                        "sizeGrid": "4,4,4,4",
                    },
                    "type": "Image"
                };
                data.push(dataL);
                let dataI = {};
                if((i==3&&j==0)||(i==3&&j==2)){
                    dataI = {
                        "props": {
                            "x":x*prixeRatio*0.25 + j*x*prixeRatio*0.2,
                            "y": 100*prixeRatio + y/7.272*prixeRatio*i - y/16*prixeRatio,
                            "skin": "join_room/"+imgList[i][j],
                            "width": x*prixeRatio*0.12,
                            "height":y/4*prixeRatio,
                            "sizeGrid": "4,4,4,4",
                            "var":"btn"+i+j,
                            "name":imgVal[i][j]
                        },
                        "type": "Image"
                    };
                }else{
                    dataI = {
                        "props": {
                            "x":x*prixeRatio*0.25 + j*x*prixeRatio*0.2,
                            "y": 100*prixeRatio + y/7.272*prixeRatio*i,
                            "skin": "join_room/"+imgList[i][j],
                            "width": x*prixeRatio*0.12,
                            "height":y/8*prixeRatio,
                            "sizeGrid": "4,4,4,4",
                            "var":"btn"+i+j,
                            "name":imgVal[i][j]
                        },
                        "type": "Image"
                    };
                }
                
                
             data.push(dataI);
            }
        }
        return  data;
    }
//    function createBtnUI(){
//         var data = [];
         
//    }

  

  

   
    
	
	return JOINROOM;
})(View)