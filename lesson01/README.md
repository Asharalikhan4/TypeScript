- to compile ts file - tsc filename.ts
- use tsc filename.ts -w to keep compiling as you change the ts file.
- in build folder we'll have the compiled code.
- src will have all the ts files.
- run tsc --init to initialize the ts config file.
- after doing all these simply run tsc -w it will lookup for all the files in the src file and compile them.
- you can go to the tsconfig.json file and configure it as you want.
- if you deleted a ts file make sure you also delete the js file.