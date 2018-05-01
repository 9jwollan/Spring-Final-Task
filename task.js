//The code at the bottom is used to export this file as a module to be used in the client file.
//The fist line sets up my export as well, ignore it.
const TaskExport = function(){

    //returns a task object, similar to pizza
    function createTask(c,t){
      return{
        type:t
        cost:c
      }
    //returns a random integer between 0 and n inclusive
    function rInt(n){
          let r= Math.random()
          r = Math.random * n
          return Math.round(r)
    }
    //returns a list of task objects.
    //You must reference the function above to create them each time
    //make all times range from 0 to 15 and all values range from 0 to 100
    function Factory(n){
let list = [t,c]
  for();
    let task = new CreateTask(t,c)
    return list;
    }

    //do not change anything below there!
    return{
        createTask,
        Factory
    }

}
module.exports = TaskExport;
