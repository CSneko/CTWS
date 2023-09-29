#!/bin/bash
wget -O purpur.jar https://api.purpurmc.org/v2/purpur/1.20.1/latest/download 
wget https://w.csk.asia/res/scripts/serversetup/必读.txt
wget https://w.csk.asia/res/scripts/serversetup/eula.txt
wget https://w.csk.asia/res/scripts/serversetup/start.sh
mkdir plugins
cd plugins
wget -O ctLib.jar https://w.csk.asia/res/plugins/ctLib.jar
wget -O CSNKTools.jar https://w.csk.asia/res/plugins/CSNKTools
wget -O toNeko.jar https://w.csk.asia/res/plugins/toNeko
