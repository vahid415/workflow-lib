# MCB SUBSYSTEM TEMPLATE
Template Version: 1.3
Release Date: 2020/5/3 
Created by: Navaco Infrastructure Team


## CONFIGURING SUBSYSTEM
Follow bellow instructions for configuing you subsystem:

1. Install Dependencies  
   Run this command: _npm install_
2. Update Package Name  
   Go to \projects\mcb-subsystem-lib\package.json"  
   Set "name" field to your subsystem name (e.g @navaco/mcb-cif)
3. Update Subsystem (Library) Typescript Path  
   Go to tsconfig.json file in the root of the project. in the "paths" configuration object, replace "@navaco/mcb-subsystem" with the name of your subsystem (for example @navaco/mcb-cif)
4. Update Typescript Imports  
   You need to update imports in the following files:
   "\src\app\host\subsystem\subsystem-host.module.ts"  
   "\src\app\host\subsystem\external-routes\index.ts"
   "\src\app\host\subsystem\external-routes\wrappers\*.ts"
5. Update Subsystem Object (mcb-subsystem-lib project)  
   Go to \projects\mcb-subsystem-lib\src\lib\subsystem\definition.ts" and update the properties of the object that is declared there.
   

