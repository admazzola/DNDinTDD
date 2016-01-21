
function Character(name)
{
  this.name=name;

}

Character.prototype = {
  constructor:Character,
  getName:function ()  {
        return this.name;
    },
    getAlignment:function() {
      return this.alignment;
    },
    setAlignment:function(alignment){
       this.alignment = alignment;
    }


}
