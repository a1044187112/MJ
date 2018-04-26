var indexEvent = { 

    init : function(obj){  // 首页

        obj.button0.on(laya.events.Event.CLICK,this,function(){ //  创建房间弹窗
            console.log("创建房间");
            indexEvent.LoadCreateRoomUI();  // 加载ui
		});	

        obj.button1.on(laya.events.Event.CLICK,this,function(){ //  加入房间弹窗
            console.log("加入房间");
            indexEvent.LoadJoinRoomUI();  // 加载ui
		});	

        obj.icon5.on(laya.events.Event.CLICK,this,function(){ // 设置弹出
            console.log("加入房间");
            indexEvent.LoadSettingUI();  // 加载ui
		});	
    },

    LoadCreateRoomUI : function(){ 
        Laya.loader.load("res/atlas/create_room.atlas", Handler.create(null, function(){
            var ui = null;  //每次中心加载创建对象
            ui = new CREATEROOM();
            Laya.stage.addChild(ui);  //加载ui	
           createRoomEvent.init(ui);
        }));
    },

    LoadJoinRoomUI : function(){  
        Laya.loader.load("res/atlas/join_room.atlas", Handler.create(null, function(){
            var ui = null;  
            ui = new JOINROOM();
            Laya.stage.addChild(ui);  //加载ui	
            joinRoomEvent.init(ui);
        }));
    },

    LoadSettingUI : function(){
        Laya.loader.load("res/atlas/setting.atlas", Handler.create(null, function(){
            var ui = null;  
            ui = new SETTING();
            Laya.stage.addChild(ui);  //加载ui	
            settingEvent.init(ui);
        }));
    }

}

var createRoomEvent = {  // 创建房间
    init : function(obj){
        obj.createRoomButton.on(laya.events.Event.CLICK,this,function(){ // button 创建房间
            obj.removeSelf();
		});	
    }
}


var joinRoomEvent = {  // 加入房间
    init : function(obj){
        let btnArr = ["btn00","btn01","btn02","btn10","btn11","btn12","btn20","btn21","btn22","btn30","btn31","btn32"];
        var inputArr = "";
        for(let i = 0;i < btnArr.length ; i++){
            obj[btnArr[i]].on(laya.events.Event.CLICK,this,function(e){
                
                if(e.target.name == "清空"){ // 删除按钮
                    inputArr = "";
                }else if(e.target.name == "删除"){ // 清空按钮
                     inputArr =  inputArr.substring(0, inputArr.length-1) ;
                }else{  // 数字
                    inputArr += e.target.name;
                }
               obj.roomIdInput.text = inputArr;
               if(inputArr.length == 6){
                   obj.removeSelf();
               }
            });
        }
    }
}

var settingEvent = {
    init : function(obj){
        obj.closeBtn.on(laya.events.Event.CLICK,this,function(){  // 关闭按钮点击
            obj.removeSelf();
        });
        let isSlider1 = false; // 是否点击的是音乐
        let isSlider2 = false;  // 是否点击的是音效
        let minX = x*0.28*prixeRatio-6*prixeRatio+14*prixeRatio*3; // 移动的范围 最小x
        let maxX = x*0.28*prixeRatio-6*prixeRatio+14*prixeRatio*3 + x*0.38*prixeRatio - 4*prixeRatio;  // 最大x

        obj.slider1.on(laya.events.Event.MOUSE_DOWN,this,function(e){  // 音乐滑块点击
             isSlider1 = true;
             sliderX = e.touches[0].stageX;
             e.stopPropagation();
        });
        obj.slider2.on(laya.events.Event.MOUSE_DOWN,this,function(e){  // 音效滑块点击
             isSlider2 = true;
             sliderX = e.touches[0].stageX;
             e.stopPropagation();
        });

        obj.on(laya.events.Event.MOUSE_MOVE,this,function(e){ // 鼠标移动
            if(isSlider1){  //  音效的滑块拖动事件
                let moveX =  parseInt(obj.slider1.x) + parseInt(e.touches[0].stageX - obj.slider1.x);
                if( moveX >= minX && moveX <= maxX){
                    obj.slider1.x =  moveX; 
                    obj.slider1_bg.width =  (moveX - minX)
                    let soundVal = (maxX - minX)/( moveX - minX )  // 计算音量大小
                }
            }else if(isSlider2){
                let moveX =  parseInt(obj.slider1.x) + parseInt(e.touches[0].stageX - obj.slider1.x); 
                if( moveX >= minX && moveX <= maxX){
                     obj.slider2.x =  moveX; 
                     obj.slider2_bg.width =  (moveX - minX)
                     let soundVal = (maxX - minX)/( moveX - minX )  // 计算音量大小
                }
            }
        });
        obj.on(laya.events.Event.MOUSE_OUT,this,function(e){
            isSlider1 = false;
            isSlider2 = false;
        });

    }
}