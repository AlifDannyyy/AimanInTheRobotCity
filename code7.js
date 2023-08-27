gdjs.LifCode = {};
gdjs.LifCode.GDlifObjects1= [];
gdjs.LifCode.GDlifObjects2= [];
gdjs.LifCode.GDAimanObjects1= [];
gdjs.LifCode.GDAimanObjects2= [];
gdjs.LifCode.GDfloor3Objects1= [];
gdjs.LifCode.GDfloor3Objects2= [];
gdjs.LifCode.GDnumberObjects1= [];
gdjs.LifCode.GDnumberObjects2= [];


gdjs.LifCode.asyncCallback17983868 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}
gdjs.LifCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.LifCode.asyncCallback17983868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LifCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate (mp3cut.net) (8).mp3", false, 50, 1);
}
{ //Subevents
gdjs.LifCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LifCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LifCode.GDlifObjects1.length = 0;
gdjs.LifCode.GDlifObjects2.length = 0;
gdjs.LifCode.GDAimanObjects1.length = 0;
gdjs.LifCode.GDAimanObjects2.length = 0;
gdjs.LifCode.GDfloor3Objects1.length = 0;
gdjs.LifCode.GDfloor3Objects2.length = 0;
gdjs.LifCode.GDnumberObjects1.length = 0;
gdjs.LifCode.GDnumberObjects2.length = 0;

gdjs.LifCode.eventsList1(runtimeScene);

return;

}

gdjs['LifCode'] = gdjs.LifCode;
