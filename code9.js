gdjs.Lif2Code = {};
gdjs.Lif2Code.GDlifObjects1= [];
gdjs.Lif2Code.GDlifObjects2= [];
gdjs.Lif2Code.GDAimanObjects1= [];
gdjs.Lif2Code.GDAimanObjects2= [];
gdjs.Lif2Code.GDRaviObjects1= [];
gdjs.Lif2Code.GDRaviObjects2= [];
gdjs.Lif2Code.GDlevelObjects1= [];
gdjs.Lif2Code.GDlevelObjects2= [];
gdjs.Lif2Code.GDfloor3Objects1= [];
gdjs.Lif2Code.GDfloor3Objects2= [];


gdjs.Lif2Code.asyncCallback18152676 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}}
gdjs.Lif2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Lif2Code.asyncCallback18152676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lif2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate (mp3cut.net) (8).mp3", false, 50, 1);
}
{ //Subevents
gdjs.Lif2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Lif2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lif2Code.GDlifObjects1.length = 0;
gdjs.Lif2Code.GDlifObjects2.length = 0;
gdjs.Lif2Code.GDAimanObjects1.length = 0;
gdjs.Lif2Code.GDAimanObjects2.length = 0;
gdjs.Lif2Code.GDRaviObjects1.length = 0;
gdjs.Lif2Code.GDRaviObjects2.length = 0;
gdjs.Lif2Code.GDlevelObjects1.length = 0;
gdjs.Lif2Code.GDlevelObjects2.length = 0;
gdjs.Lif2Code.GDfloor3Objects1.length = 0;
gdjs.Lif2Code.GDfloor3Objects2.length = 0;

gdjs.Lif2Code.eventsList1(runtimeScene);

return;

}

gdjs['Lif2Code'] = gdjs.Lif2Code;
