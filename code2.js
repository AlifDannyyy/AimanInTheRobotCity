gdjs.How_32To_32PlayCode = {};
gdjs.How_32To_32PlayCode.GDbg2Objects1= [];
gdjs.How_32To_32PlayCode.GDbg2Objects2= [];
gdjs.How_32To_32PlayCode.GDMenangObjects1= [];
gdjs.How_32To_32PlayCode.GDMenangObjects2= [];
gdjs.How_32To_32PlayCode.GDMenang5Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang5Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang2Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang2Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang3Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang3Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang4Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang4Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang6Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang6Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang7Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang7Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang8Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang8Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang9Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang9Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang10Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang10Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang11Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang11Objects2= [];
gdjs.How_32To_32PlayCode.GDMenang12Objects1= [];
gdjs.How_32To_32PlayCode.GDMenang12Objects2= [];
gdjs.How_32To_32PlayCode.GDAimanObjects1= [];
gdjs.How_32To_32PlayCode.GDAimanObjects2= [];
gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1= [];
gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects2= [];
gdjs.How_32To_32PlayCode.GDRobot2Objects1= [];
gdjs.How_32To_32PlayCode.GDRobot2Objects2= [];
gdjs.How_32To_32PlayCode.GDRaviObjects1= [];
gdjs.How_32To_32PlayCode.GDRaviObjects2= [];
gdjs.How_32To_32PlayCode.GDCikguElyaObjects1= [];
gdjs.How_32To_32PlayCode.GDCikguElyaObjects2= [];
gdjs.How_32To_32PlayCode.GDCoinObjects1= [];
gdjs.How_32To_32PlayCode.GDCoinObjects2= [];
gdjs.How_32To_32PlayCode.GDBossObjects1= [];
gdjs.How_32To_32PlayCode.GDBossObjects2= [];
gdjs.How_32To_32PlayCode.GDCaraBermainObjects1= [];
gdjs.How_32To_32PlayCode.GDCaraBermainObjects2= [];
gdjs.How_32To_32PlayCode.GDButtonObjects1= [];
gdjs.How_32To_32PlayCode.GDButtonObjects2= [];
gdjs.How_32To_32PlayCode.GDKananObjects1= [];
gdjs.How_32To_32PlayCode.GDKananObjects2= [];
gdjs.How_32To_32PlayCode.GDSpaceObjects1= [];
gdjs.How_32To_32PlayCode.GDSpaceObjects2= [];
gdjs.How_32To_32PlayCode.GDeObjects1= [];
gdjs.How_32To_32PlayCode.GDeObjects2= [];
gdjs.How_32To_32PlayCode.GDTitikObjects1= [];
gdjs.How_32To_32PlayCode.GDTitikObjects2= [];
gdjs.How_32To_32PlayCode.GDLeftButtonObjects1= [];
gdjs.How_32To_32PlayCode.GDLeftButtonObjects2= [];
gdjs.How_32To_32PlayCode.GDRightButtonObjects1= [];
gdjs.How_32To_32PlayCode.GDRightButtonObjects2= [];
gdjs.How_32To_32PlayCode.GDJumpButton2Objects1= [];
gdjs.How_32To_32PlayCode.GDJumpButton2Objects2= [];
gdjs.How_32To_32PlayCode.GDFireButtonObjects1= [];
gdjs.How_32To_32PlayCode.GDFireButtonObjects2= [];


gdjs.How_32To_32PlayCode.mapOfGDgdjs_9546How_959532To_959532PlayCode_9546GDMedievalButtonBeigeObjects1Objects = Hashtable.newFrom({"MedievalButtonBeige": gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1});
gdjs.How_32To_32PlayCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1[k] = gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Page", false);
}}

}


};gdjs.How_32To_32PlayCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.How_32To_32PlayCode.GDbg2Objects1);
{for(var i = 0, len = gdjs.How_32To_32PlayCode.GDbg2Objects1.length ;i < len;++i) {
    gdjs.How_32To_32PlayCode.GDbg2Objects1[i].setOpacity(50);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "[FREE]+Dark+Futuristic+Ambient+Trap+Beat+-+Clone (mp3cut.net).mp3", true, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.How_32To_32PlayCode.mapOfGDgdjs_9546How_959532To_959532PlayCode_9546GDMedievalButtonBeigeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.How_32To_32PlayCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.How_32To_32PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.How_32To_32PlayCode.GDbg2Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDbg2Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenangObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenangObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang5Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang5Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang2Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang2Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang3Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang3Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang4Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang4Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang6Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang6Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang7Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang7Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang8Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang8Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang9Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang9Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang10Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang10Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang11Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang11Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDMenang12Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMenang12Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDAimanObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDAimanObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDRobot2Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDRobot2Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDRaviObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDRaviObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDCikguElyaObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDCikguElyaObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDCoinObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDCoinObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDBossObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBossObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDCaraBermainObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDCaraBermainObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDButtonObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDButtonObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDKananObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDKananObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDSpaceObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDSpaceObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDeObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDeObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDTitikObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDTitikObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDLeftButtonObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDLeftButtonObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDRightButtonObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDRightButtonObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDJumpButton2Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDJumpButton2Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDFireButtonObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDFireButtonObjects2.length = 0;

gdjs.How_32To_32PlayCode.eventsList1(runtimeScene);

return;

}

gdjs['How_32To_32PlayCode'] = gdjs.How_32To_32PlayCode;
