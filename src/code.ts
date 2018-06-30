import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
 
var obs=Observable.create(function  subscribe(observer:any){
    observer.next('Hey guys')
});

obs.subscribe( (x:any)=>addItem(x));


function addItem(val:any){
    var node=document.createElement("li");
    var textnode=document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}