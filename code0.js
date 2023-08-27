gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.GDbgObjects1= [];
gdjs.SplashScreenCode.GDbgObjects2= [];
gdjs.SplashScreenCode.GDLogoObjects1= [];
gdjs.SplashScreenCode.GDLogoObjects2= [];
gdjs.SplashScreenCode.GDAqwiseObjects1= [];
gdjs.SplashScreenCode.GDAqwiseObjects2= [];


gdjs.SplashScreenCode.asyncCallback17662308 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Page", false);
}}
gdjs.SplashScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.SplashScreenCode.asyncCallback17662308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SplashScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.SplashScreenCode.GDbgObjects1);
{for(var i = 0, len = gdjs.SplashScreenCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDbgObjects1[i].setOpacity(50);
}
}
{ //Subevents
gdjs.SplashScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDbgObjects1.length = 0;
gdjs.SplashScreenCode.GDbgObjects2.length = 0;
gdjs.SplashScreenCode.GDLogoObjects1.length = 0;
gdjs.SplashScreenCode.GDLogoObjects2.length = 0;
gdjs.SplashScreenCode.GDAqwiseObjects1.length = 0;
gdjs.SplashScreenCode.GDAqwiseObjects2.length = 0;

gdjs.SplashScreenCode.eventsList1(runtimeScene);

return;

}

gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;
