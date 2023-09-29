@echo off
set DOWNLOAD_URL=https://api.purpurmc.org/v2/purpur/1.20.1/latest/download
curl -o purpur.jar %DOWNLOAD_URL%
curl -O https://w.csk.asia/res/scripts/serversetup/必读.txt
curl -O https://w.csk.asia/res/scripts/serversetup/eula.txt
curl -O https://w.csk.asia/res/scripts/serversetup/start.bat
mkdir plugins
cd plugins
curl -o ctLib.jar https://w.csk.asia/res/plugins/ctLib.jar
curl -o CSNKTools.jar https://w.csk.asia/res/plugins/CSNKTools.jar
curl -o toNeko.jar https://w.csk.asia/res/plugins/toNeko.jar
