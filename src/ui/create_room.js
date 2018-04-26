var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var CREATEROOM = (function(_super) {
	function CREATEROOM() {
		this.createRoomButton;
        this.button0;
        this.button1;
        this.button2;
        this.button3;
		CREATEROOM.__super.call(this);
		
	}

	Laya.class(CREATEROOM, 'ui.test.CREATEROOM', _super);
	var __proto__ = CREATEROOM.prototype;

	__proto__.createChildren = function() {
		laya.ui.Component.prototype.createChildren.call(this);
		CREATEROOM.uiView = createUiView();
		this.createView(CREATEROOM.uiView); // 创建ui
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
					"skin": "create_room/bg.png",
					"width":x*prixeRatio,
					"height": y*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":parseInt(x*prixeRatio*0.05),
					"y": 40*prixeRatio,
					"skin": "create_room/icon3.png",
					"width": x*prixeRatio*0.9,
					"height":y*prixeRatio - 80*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":parseInt(x*prixeRatio*0.05) ,
					"y": 20*prixeRatio,
					"skin": "create_room/icon2.png",
					"width":54*prixeRatio,
					"height":y*prixeRatio - 40*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":parseInt(x*prixeRatio - x*prixeRatio*0.05) - 28*prixeRatio ,
					"y": 20*prixeRatio,
					"skin": "create_room/icon2.png",
					"width": 54*prixeRatio,
					"height":y*prixeRatio - 40*prixeRatio,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":parseInt(x*prixeRatio*0.05)+40*prixeRatio,
					"y": 30*prixeRatio+y*prixeRatio*0.1,
					"skin": "create_room/button2.png",
					"width": x*prixeRatio*0.15,
					"height":x*prixeRatio*0.1,
					"sizeGrid": "4,4,4,4",
                    "label":"贵阳捉鸡",
                    "labelColors":"#ffffff",
                    "labelSize":18*prixeRatio,
                    "stateNum":1,
                    "labelPadding":"0,0,10,0"
				},
				"type": "Button"
			},{
				"props": {
					"x":parseInt(x*prixeRatio*0.1)+50*prixeRatio +  x*prixeRatio*0.14  - 10*prixeRatio  ,
					"y": 30*prixeRatio+y*prixeRatio*0.1,
					"skin": "create_room/creat.png",
					"width":x*prixeRatio*0.6,
					"height":y*prixeRatio - 40*prixeRatio-y*prixeRatio*0.25,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			},{
				"props": {
					"x":parseInt(x*prixeRatio*0.1)+10*prixeRatio +  x*prixeRatio*0.4,
					"y": y*prixeRatio - 40*prixeRatio - y*prixeRatio*0.1 -42*prixeRatio,
					"skin": "create_room/button1.png",
					"width": x*prixeRatio*0.2,
					"height":x*prixeRatio*0.1,
					"sizeGrid": "4,4,4,4",
                    "label":"创建房间",
                    "labelColors":"#ffffff",
                    "labelSize":18*prixeRatio,
                    "stateNum":1,
                    "labelPadding":"0,0,10,0",
                    "height":42*prixeRatio,
                    "width":134*prixeRatio,
                    "var":"createRoomButton"
				},
				"type": "Button"
			},{
				"props": {
					"x":parseInt(x*prixeRatio*0.1)+15*prixeRatio +  x*prixeRatio*0.14,
					"y":40*prixeRatio+y*prixeRatio*0.1 + 5*prixeRatio ,
					"skin": "create_room/icon4.png",
					"width": 25*prixeRatio,
					"height":x*prixeRatio*0.1/2,
					"sizeGrid": "4,4,4,4",
				},
				"type": "Image"
			}],
        };
        uiView.child =  uiView.child.concat(initView());


		return uiView;
	}

   function initView(){
       var data = [];
       data.push(initTitle(parseInt(x*prixeRatio*0.1)+40*prixeRatio +  x*prixeRatio*0.2,40*prixeRatio+y*prixeRatio*0.1 + 10*prixeRatio,"局数:")); // 局数
       data.push(initTitle(parseInt(x*prixeRatio*0.1)+40*prixeRatio +  x*prixeRatio*0.2,40*prixeRatio+y*prixeRatio*0.1 + 40*prixeRatio,"玩法:")); // 局数
       data.push(initTitle(parseInt(x*prixeRatio*0.1)+40*prixeRatio +  x*prixeRatio*0.2,40*prixeRatio+y*prixeRatio*0.1 + 90*prixeRatio,"鸡牌:")); // 局数
       data.push(initTitle(parseInt(x*prixeRatio*0.1)+40*prixeRatio +  x*prixeRatio*0.2,40*prixeRatio+y*prixeRatio*0.1 + 140*prixeRatio,"连庄:")); // 局数
 
       data.push(initRadio(parseInt(x*prixeRatio*0.1)+ x*prixeRatio*0.34,40*prixeRatio+y*prixeRatio*0.1 + 10*prixeRatio," 8局    , 16局"));
       data.push(initRadio(parseInt(x*prixeRatio*0.1)+  x*prixeRatio*0.34,40*prixeRatio+y*prixeRatio*0.1 + 40*prixeRatio," 二丁拐    , 三丁拐    , 四人局"));
       data.push(initRadio(parseInt(x*prixeRatio*0.1)+  x*prixeRatio*0.34,40*prixeRatio+y*prixeRatio*0.1 + 90*prixeRatio," 翻牌鸡    , 摇摆鸡"));
       data.push(initRadio(parseInt(x*prixeRatio*0.1)+  x*prixeRatio*0.34,40*prixeRatio+y*prixeRatio*0.1 + 140*prixeRatio," 连庄    , 一扣二    , 通三"));

        data = data.concat(initCheckBox(parseInt(x*prixeRatio*0.1)+ x*prixeRatio*0.34,60*prixeRatio+y*prixeRatio*0.1 + 40*prixeRatio,[" 十秒极速出牌"," 原缺"]));
        data = data.concat(initCheckBox(parseInt(x*prixeRatio*0.1)+ x*prixeRatio*0.34,110*prixeRatio+y*prixeRatio*0.1 + 40*prixeRatio,[" 星期鸡"," 本鸡"," 乌骨鸡"]));
        return data;
   }

   function initTitle(_x,_y,text){
        var dataLable = {
            "props": {
                "x":_x ,
                "y": _y ,
                "text": text,
                "width": 137,
                "height": 26,
                "fontSize": 14*prixeRatio,
                "name": "label"
            },
            "type": "Label"
        };
        return  dataLable;
   }

   function initRadio(_x,_y,text){
        var dataL = {
            "props": {
                "x":_x ,
                "y": _y,
                "skin": "create_room/radio_group.png",
                "labels": text,
                "label2'": "",
                "var": "radio",
                "labelSize":14*prixeRatio,
                "width":1000,
                // "stateNum":1,
            },
        "type": "RadioGroup"
        };
        return dataL;
   }

   function initCheckBox(_x,_y,arr){
       let dataL = [];
       for(let i = 0 ;i < arr.length ; i++){
            dataL.push({
            "props": {
                "x":_x + i*22*arr[0].length*prixeRatio,
                "y": _y,
                "skin": "create_room/check_box_group.png",
                "label": arr[i],
                "label2'": "",
                "var": "radio",
                "labelSize":14*prixeRatio,
                // "stateNum":1,
            },
        "type": "CheckBox"
        });
       }
        return dataL;
   }
    
	
	return CREATEROOM;
})(View)