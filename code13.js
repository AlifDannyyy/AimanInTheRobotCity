gdjs.Menang_32PageCode = {};
gdjs.Menang_32PageCode.GDbg2Objects1= [];
gdjs.Menang_32PageCode.GDbg2Objects2= [];
gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1= [];
gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects2= [];
gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1= [];
gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects2= [];
gdjs.Menang_32PageCode.GDOrangeButtonWithStoneFrame2Objects1= [];
gdjs.Menang_32PageCode.GDOrangeButtonWithStoneFrame2Objects2= [];
gdjs.Menang_32PageCode.GDTrophyObjects1= [];
gdjs.Menang_32PageCode.GDTrophyObjects2= [];
gdjs.Menang_32PageCode.GDMenangObjects1= [];
gdjs.Menang_32PageCode.GDMenangObjects2= [];
gdjs.Menang_32PageCode.GDDevelopObjects1= [];
gdjs.Menang_32PageCode.GDDevelopObjects2= [];


gdjs.Menang_32PageCode.mapOfGDgdjs_9546Menang_959532PageCode_9546GDMedievalButtonBeigeObjects1Objects = Hashtable.newFrom({"MedievalButtonBeige": gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1});
gdjs.Menang_32PageCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1[k] = gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Menang_32PageCode.mapOfGDgdjs_9546Menang_959532PageCode_9546GDMedievalButtonBeige2Objects1Objects = Hashtable.newFrom({"MedievalButtonBeige2": gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1});
gdjs.Menang_32PageCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1.length;i<l;++i) {
    if ( gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1[k] = gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1[i];
        ++k;
    }
}
gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Page", false);
}}

}


};gdjs.Menang_32PageCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.Menang_32PageCode.GDbg2Objects1);
{for(var i = 0, len = gdjs.Menang_32PageCode.GDbg2Objects1.length ;i < len;++i) {
    gdjs.Menang_32PageCode.GDbg2Objects1[i].setOpacity(50);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Victory.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Menang_32PageCode.mapOfGDgdjs_9546Menang_959532PageCode_9546GDMedievalButtonBeigeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Menang_32PageCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige2"), gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Menang_32PageCode.mapOfGDgdjs_9546Menang_959532PageCode_9546GDMedievalButtonBeige2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Menang_32PageCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Menang_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menang_32PageCode.GDbg2Objects1.length = 0;
gdjs.Menang_32PageCode.GDbg2Objects2.length = 0;
gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.Menang_32PageCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects1.length = 0;
gdjs.Menang_32PageCode.GDMedievalButtonBeige2Objects2.length = 0;
gdjs.Menang_32PageCode.GDOrangeButtonWithStoneFrame2Objects1.length = 0;
gdjs.Menang_32PageCode.GDOrangeButtonWithStoneFrame2Objects2.length = 0;
gdjs.Menang_32PageCode.GDTrophyObjects1.length = 0;
gdjs.Menang_32PageCode.GDTrophyObjects2.length = 0;
gdjs.Menang_32PageCode.GDMenangObjects1.length = 0;
gdjs.Menang_32PageCode.GDMenangObjects2.length = 0;
gdjs.Menang_32PageCode.GDDevelopObjects1.length = 0;
gdjs.Menang_32PageCode.GDDevelopObjects2.length = 0;

gdjs.Menang_32PageCode.eventsList2(runtimeScene);

return;

}

gdjs['Menang_32PageCode'] = gdjs.Menang_32PageCode;
