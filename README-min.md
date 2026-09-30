Trestegsmetoden

##
1. CSS kopplas in längst upp i JSX. import "./App.css";
2. <li key={t.id} className={t.done ? "todo completed" : "todo"}>
   Detta styr ifall klassen gälla eller inte, om t.done är sann 
   gäller t.done
   
3. Det är en class, en "if". State är något helt annat, det är en state variabel som
   man kan uppdatera med dess set funktion.
   .completed aktiveras av en boolean 
