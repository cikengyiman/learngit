function interit(Origion,Target){
	var F=function(){};
	F.prototype=Origion.prototype;
	var f=new F();
	Target.prototype=f;
	Target.prototype.constructor=Target;
	Target.prototype.Uber=Origion;
}