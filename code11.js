gdjs.Lif3Code = {};
gdjs.Lif3Code.GDlifObjects1= [];
gdjs.Lif3Code.GDlifObjects2= [];
gdjs.Lif3Code.GDAimanObjects1= [];
gdjs.Lif3Code.GDAimanObjects2= [];
gdjs.Lif3Code.GDfloor3Objects1= [];
gdjs.Lif3Code.GDfloor3Objects2= [];
gdjs.Lif3Code.GDFloor4Objects1= [];
gdjs.Lif3Code.GDFloor4Objects2= [];
gdjs.Lif3Code.GDCikguElyaObjects1= [];
gdjs.Lif3Code.GDCikguElyaObjects2= [];
gdjs.Lif3Code.GDRaviObjects1= [];
gdjs.Lif3Code.GDRaviObjects2= [];


gdjs.Lif3Code.asyncCallback18360164 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Keluar", false);
}}
gdjs.Lif3Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Lif3Code.asyncCallback18360164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lif3Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate (mp3cut.net) (8).mp3", false, 50, 1);
}
{ //Subevents
gdjs.Lif3Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Lif3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lif3Code.GDlifObjects1.length = 0;
gdjs.Lif3Code.GDlifObjects2.length = 0;
gdjs.Lif3Code.GDAimanObjects1.length = 0;
gdjs.Lif3Code.GDAimanObjects2.length = 0;
gdjs.Lif3Code.GDfloor3Objects1.length = 0;
gdjs.Lif3Code.GDfloor3Objects2.length = 0;
gdjs.Lif3Code.GDFloor4Objects1.length = 0;
gdjs.Lif3Code.GDFloor4Objects2.length = 0;
gdjs.Lif3Code.GDCikguElyaObjects1.length = 0;
gdjs.Lif3Code.GDCikguElyaObjects2.length = 0;
gdjs.Lif3Code.GDRaviObjects1.length = 0;
gdjs.Lif3Code.GDRaviObjects2.length = 0;

gdjs.Lif3Code.eventsList1(runtimeScene);

return;

}

gdjs['Lif3Code'] = gdjs.Lif3Code;
