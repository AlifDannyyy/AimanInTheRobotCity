gdjs.CutsceneCode = {};
gdjs.CutsceneCode.GDCutscene1Objects1= [];
gdjs.CutsceneCode.GDCutscene1Objects2= [];
gdjs.CutsceneCode.GDBlackObjects1= [];
gdjs.CutsceneCode.GDBlackObjects2= [];


gdjs.CutsceneCode.asyncCallback17720524 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}
gdjs.CutsceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(26), (runtimeScene) => (gdjs.CutsceneCode.asyncCallback17720524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CutsceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cutscene1"), gdjs.CutsceneCode.GDCutscene1Objects1);
{for(var i = 0, len = gdjs.CutsceneCode.GDCutscene1Objects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDCutscene1Objects1[i].play();
}
}
{ //Subevents
gdjs.CutsceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.CutsceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CutsceneCode.GDCutscene1Objects1.length = 0;
gdjs.CutsceneCode.GDCutscene1Objects2.length = 0;
gdjs.CutsceneCode.GDBlackObjects1.length = 0;
gdjs.CutsceneCode.GDBlackObjects2.length = 0;

gdjs.CutsceneCode.eventsList1(runtimeScene);

return;

}

gdjs['CutsceneCode'] = gdjs.CutsceneCode;
