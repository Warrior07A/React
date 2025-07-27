# React
<br>
slides link ="https://www.canva.com/design/DAGStTo7_1Y/H-uoNlkdJ2X4P3LbOME45Q/edit";
other slides link better :="https://petal-estimate-4e9.notion.site/React-Part-1-1177dfd1073580069172fc54e33929c0"

## what does .jsx stands for??<br>
it means JAVA SCRIPT XML ;
the code doesn't returns use HTMl it returns XML
<BR>

## WHAT IS XML??<BR>
IT IS VERY SIMILAR WAY OF RETURNING DATA LIKE JSON
<hr>

## ways to initialize a react project
<br>
npx create vite@latest
<br>
easy then

## TO RUN A REACT PROJECT

run 
'npm install ' to install all the dependencies
and then run
'npm run dev' to run the App.jsx code locally

## LIFE CYCLE EVENTS;
//MOUNTING , re-rendering,unmounting

mounting -shoudl appear only once when it is called in the beginning

## USEEFFECT

it is used when we have to call a fn only once for e.g. set Interval being called only once in the starting then it will run automa.
and creates unwanted multiple stacks of setInterval hence crashing the app
we run those fn in useeffect hook 
IT TAKES 2 ARGUMENTS (fn , [dependency])