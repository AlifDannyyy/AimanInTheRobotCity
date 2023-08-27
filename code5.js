gdjs.Lif0Code = {};
gdjs.Lif0Code.GDlifObjects1= [];
gdjs.Lif0Code.GDlifObjects2= [];
gdjs.Lif0Code.GDAimanObjects1= [];
gdjs.Lif0Code.GDAimanObjects2= [];
gdjs.Lif0Code.GDfloor3Objects1= [];
gdjs.Lif0Code.GDfloor3Objects2= [];
gdjs.Lif0Code.GDfloor1Objects1= [];
gdjs.Lif0Code.GDfloor1Objects2= [];


gdjs.Lif0Code.asyncCallback17842860 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}
gdjs.Lif0Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Lif0Code.asyncCallback17842860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lif0Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate (mp3cut.net) (8).mp3", false, 50, 1);
}
{ //Subevents
gdjs.Lif0Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Lif0Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lif0Code.GDlifObjects1.length = 0;
gdjs.Lif0Code.GDlifObjects2.length = 0;
gdjs.Lif0Code.GDAimanObjects1.length = 0;
gdjs.Lif0Code.GDAimanObjects2.length = 0;
gdjs.Lif0Code.GDfloor3Objects1.length = 0;
gdjs.Lif0Code.GDfloor3Objects2.length = 0;
gdjs.Lif0Code.GDfloor1Objects1.length = 0;
gdjs.Lif0Code.GDfloor1Objects2.length = 0;

gdjs.Lif0Code.eventsList1(runtimeScene);

return;

}

gdjs['Lif0Code'] = gdjs.Lif0Code;
